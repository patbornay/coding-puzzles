/**
 * The key rule: Await when you need the result, don't await when you don't
✅ DO await when:
You need the result to continue
You want to handle errors properly
You need things to happen in sequence
You're returning the result from your function

✅ DON'T await when:
You want background/parallel execution
You're doing "fire and forget" operations
You want to start multiple things simultaneously
You're passing the promise to someone else
*/

export const profileProvider = () => {
  let inProgress: any = null;
  let cachedData: any = null;

  return {
    async getProfile() {
      // Return cached data if available
      if (cachedData) return { data: cachedData };

      // Return existing promise if request is already in progress
      if (inProgress) return inProgress;

      // Create new promise for the fetch operation
      inProgress = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
          );

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          cachedData = data;
          return { data };
        } catch (error) {
          return { error };
        } finally {
          inProgress = null;
        }
      };

      return inProgress;
    },
  };
};

// Usage remains the same:
const profileService = profileProvider();

const promise1 = await profileService.getProfile();
const promise12 = await profileService.getProfile();
const promise13 = await profileService.getProfile();

// You can now use these promises with async/await as well:
async function example() {
  const result1 = await profileService.getProfile();
  const result2 = await profileService.getProfile(); // Will use cached data

  console.log(result1, result2);
}

// Reps go here 
/**
 * Write a function that: 
 * - Provides a method to getProfile which makes an API call 
 * to https://jsonplaceholder.typicode.com/users/1
 * - prevents calling while a call is inProgress
 * - contains a cache to store already fetched data
 * - use the async await pattern
 */


export const profileProvider1 = () => {
  let inProgress: any = null;
  let cachedData: any = null;

  return {
    async getProfile() {
      if (cachedData) return { data: cachedData };
      if (inProgress) return inProgress;

      inProgress = async () => {
        try {
          const response = await fetch("some URL");

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          cachedData = data;
          return { data };
        } catch (error) {
          return { error };
        } finally {
          inProgress = null;
        };
      };
      return inProgress;
    },
  };
};

const profileService1 = profileProvider1();
const promise11 = await profileService1.getProfile();

/**
 * - block multiple calls 
 * - cache results
 * - provide a function to fetch api data 
 */
export const profileProvider2 = () => {
  let inProgress: any = null;
  let cachedData: any = null;

  // object which contains a getProfile and clear cache method
  return {
    clearCache: () => {},
    async getProfile() {
      if (cachedData) return {data: cachedData};
      if (inProgress) return inProgress;

      inProgress = async () => {
        try {
          const response = await fetch("some URL");
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          // save to cache and return data if successful
          const data = await response.json();
          cachedData = data;
          return {data}
        } catch (error) {
          return {error};
        } finally {
          inProgress = null;
        };
      };
      return inProgress;
    }
  }
}

const service2 = profileProvider2();
const promise2 = await service2.getProfile();

export const profileProvider3 = () => {
  let inProgress: any = null;
  let cachedData: any = null;

  return {
    clearCache: () => {},
    async getProfile() {
      if (cachedData) return {data: cachedData};
      if (inProgress) return inProgress;

      inProgress = async () => {
        try {
          const response = await fetch("some URL");
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          const data = await response.json();
          cachedData = data;
          return {data}
        } catch (error) {
          return {error};
        } finally {
          inProgress = null;
        }
      }
      return inProgress;
    }
  }
}

const profileService3 = profileProvider3();
const results3 = await profileService3.getProfile();