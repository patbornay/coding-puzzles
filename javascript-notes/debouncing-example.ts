// 2. DEBOUNCING
// Prevents function from being called too frequently
const debounce = (func, delay) => {
  let timeoutId;
  
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const expensiveOperation = debounce((query) => {
  console.log(`Searching for: ${query}`);
}, 300);

// Only the last call within 300ms will execute

// reps 
type AnyFunction = (...args: any[]) => any;
// Parameters extracts the parameters over the given type
type DebouncedFunction<T extends AnyFunction> = (...args: Parameters<T>) => void;
// ensure T is a function type and captures its exact signature
const debounce1 = <T extends AnyFunction>(func: T, delayMs: number): DebouncedFunction<T> => {

  let timerId: NodeJS.Timeout | null = null;

  // Then when the consumer executed the function that was given earlier
  // they can also pass args 
  return function debouncedFunction(...args: Parameters<T>): void {
    // Cancel any existing timer
    if (timerId) {
      clearTimeout(timerId);
    }
    const context = this;

    // Set a new timer to execute the function after the delay
    timerId = setTimeout(() => {
      func.apply(context, args); // Pass args over
      timerId = null; // Clean up the timer reference
    }, delayMs);
  };
};

// why we use func.apply(this, args) instead of func(args)?
// this is more if we say had an object at the global level, the debounced function 
// we get back would no longer be able to access that global object
const user = {
  name: 'Alice',
  age: 30,
  
  // This method relies on 'this' to work
  greet(message) {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. ${message}`);
  },
  
  // This method also needs 'this'
  updateAge(newAge) {
    this.age = newAge;
    console.log(`${this.name} is now ${this.age} years old`);
  },

  badGreet: (message: string) => {},
  goodGreet: (message: string) => {},
};

// BAD debounce - loses 'this' context
const badDebounce = (func, delay) => {
  return (...args) => {
    setTimeout(() => func(...args), delay); // 'this' becomes undefined
  };
};

// GOOD debounce - preserves 'this' context  
const goodDebounce = (func, delay) => {
  return function(...args) {
    const context = this;
    setTimeout(() => func.apply(context, args), delay);
  };
};

// Test the difference
console.log('=== Testing BAD debounce ===');
// we assign the user.greet method as debounced with 100ms to user.badGreet
const badDebouncedGreet = badDebounce(user.greet, 100);
user.badGreet = badDebouncedGreet;

try {
  user.badGreet('Nice to meet you!');
  // This will log: "Hi, I'm undefined and I'm undefined years old. Nice to meet you!"
  // Because 'this' is undefined inside the function
} catch (error) {
  console.log('Error:', error.message);
}

console.log('\n=== Testing GOOD debounce ===');
const goodDebouncedGreet = goodDebounce(user.greet, 100);
user.goodGreet = goodDebouncedGreet;

setTimeout(() => {
  user.goodGreet('Nice to meet you!');
}, 200);
/** 
 * if the function's logic depends on this referring to a specific object, 
 * it will break or behave unexpectedly when this becomes undefined.
 */