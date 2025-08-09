// 10. PROMISE POOL
// Limits concurrent async operations
class PromisePool {
  private concurrency: number;
  private running: Promise<any>[];
  private queue: Array<{
    /*
     * A promiseFactory isnt anything special, just a property that can contain any promise function
     **/
    promiseFactory: () => Promise<any>;
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
  }>;

  constructor(concurrency = 3) {
    this.concurrency = concurrency;
    this.running = [];
    this.queue = [];
  }

  // add a promiseFactory and get a new promise
  // that adds this to the queue and executes process
  async add(promiseFactory: () => Promise<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promiseFactory,
        resolve,
        reject,
      });

      this.process();
    });
  }

  // if there is already more or equal amount of running promises to the concurrency limit
  // then do not process and return
  // otherwise get the first promise on the queue
  // run its promiseFactory and add that promise to the running list
  // run the promise with try catch as normal with executing promises
  private async process(): Promise<void> {
    if (this.running.length >= this.concurrency || this.queue.length === 0) {
      return;
    }

    const { promiseFactory, resolve, reject } = this.queue.shift()!;
    const promise = promiseFactory();

    this.running.push(promise);

    try {
      const result = await promise;
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running = this.running.filter((p) => p !== promise);
      this.process();
    }
  }
}

/**
How it works:
Key Components:
Queue interface: Stores pending tasks with their promise factory and resolution handlers
concurrency: Maximum number of promises that can run at once (default: 3)
running: Array tracking currently executing promises
queue: Array of pending tasks waiting to be executed

Flow:
When you call add(), it wraps your promise factory in a new Promise and queues it
process() checks if there's room to run more tasks (under concurrency limit)
If so, it dequeues a task, executes it, and adds it to the running array
When a task completes, it's removed from running and process() is called again to start the next queued task
 */

// reps
interface Queue {
  promiseFactory: () => Promise<any>;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
}

class PromisePool1 {
  private concurrency: number;
  private running: Promise<any>[];
  private queue: Queue[];

  constructor(concurrency = 3) {
    this.concurrency = concurrency;
    this.running = [];
    this.queue = [];
  }

  async add(promiseFactory: () => Promise<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promiseFactory,
        resolve,
        reject,
      });
      this.process();
    });
  }

  private async process(): Promise<void> {
    if (this.running.length >= this.concurrency || this.queue.length === 0) {
      return;
    }
    // get the next promise in line
    const { promiseFactory, resolve, reject } = this.queue.shift()!;
    const promise = promiseFactory(); // execute
    this.running.push(promise); // mark as in progress

    try {
      const result = await promise;
      resolve(result); // execute whatever resolve function was provided
    } catch (error) {
      reject(error); // execute whatever error function was provided
    } finally {
      this.running = this.running.filter((p) => p !== promise);
      this.process();
    }
  }
}

async function exampleUsage() {
  const pool = new PromisePool1(2); // Only 2 concurrent requests at a time
  
  // Simulate API calls that take different amounts of time
  const apiCall = (id: number, delay: number) => () => {
    console.log(`Starting API call ${id}`);
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        console.log(`Completed API call ${id} after ${delay}ms`);
        resolve(`Result from API ${id}`);
      }, delay);
    });
  };

  // Add multiple tasks to the pool
  const tasks = [
    pool.add(apiCall(1, 1000)),
    pool.add(apiCall(2, 500)),
    pool.add(apiCall(3, 800)),
    pool.add(apiCall(4, 300)),
    pool.add(apiCall(5, 600)),
  ];

  console.log("All tasks queued, waiting for results...");
  
  // Wait for all tasks to complete
  const results = await Promise.all(tasks);
  console.log("All results:", results);
}

// Example: File processing with error handling
async function fileProcessingExample() {
  const pool = new PromisePool1(3);
  
  const processFile = (filename: string, shouldFail: boolean = false) => () => {
    console.log(`Processing ${filename}...`);
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          console.log(`Failed to process ${filename}`);
          reject(new Error(`Processing failed for ${filename}`));
        } else {
          console.log(`Successfully processed ${filename}`);
          resolve(`Processed: ${filename}`);
        }
      }, Math.random() * 1000 + 500);
    });
  };

  const files = [
    "document1.pdf",
    "document2.pdf", 
    "document3.pdf",
    "document4.pdf",
    "document5.pdf"
  ];

  try {
    const results = await Promise.all(
      files.map((file, index) => 
        pool.add(processFile(file, index === 2)) // Make the 3rd file fail
      )
    );
    console.log("File processing results:", results);
  } catch (error) {
    console.log("Some files failed to process:", error.message);
  }
}

// Run the examples
console.log("=== API Call Example ===");
exampleUsage().then(() => {
  console.log("\n=== File Processing Example ===");
  return fileProcessingExample();
});