export const profileProvider = () => {
  let inProgress: any = null;
  let cachedData = null;
  return {
    async getProfile() {
      if (cachedData) return { data: cachedData };
      if (inProgress) return inProgress;
      inProgress = fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
          return res.json();
        })
        .then((data) => {
          cachedData = data;
          return { data };
        })
        .catch((err) => {
          return { error: err };
        })
        .finally(() => {
          inProgress = null;
        });

      return inProgress;
    },
  };
};

//Now you can use it like:
const profileService = profileProvider();

const promise1 = profileService.getProfile();
const promise2 = profileService.getProfile();
const promise3 = profileService.getProfile();

// Analysis reps
/**
 * Notes/Improvements
 * - use async await pattern to avoid promise chaining
 * - why do we use cache? it is so we dont call getprofile all the time for the same data
 * - why do we have inProgress? it is so we dont getprofile while it is already being fetched
 * - use a clear cache method for the user to make a new req without getting old data
 */

// Reps go here
/**
 * Write a function that:
 * - Provides a method to getProfile which makes an API call
 * to https://jsonplaceholder.typicode.com/users/1
 * - prevents calling while a call is inProgress
 * - contains a cache to store already fetched data
 * - use the promise chaining pattern
 */

const getProfile = () => {
  let inProgress: any = null;
  let cachedData: any = null;
  return {
    async getProfile() {
      if (cachedData) return { data: cachedData };
      if (inProgress) return inProgress;

      inProgress = fetch("Some URL")
        .then((res) => {
          if (!res.ok) throw new Error("Error occurred");
          return res.json();
        })
        .then((data) => {
          cachedData = data;
          return { data };
        })
        .catch((err) => {
          return { error: err };
        })
        .finally(() => {
          inProgress = null;
        });

      return inProgress;
    },
  };
};

const getProfile1 = () => {
  let inProgress: any = null;
  let cachedData: any = null;
  return {
    async getProfile() {
      if (cachedData) return { data: cachedData };
      if (inProgress) return inProgress;

      inProgress = fetch("some url")
        .then((res) => {
          if (!res.ok) throw new Error("Error occurred");
          return res.json();
        })
        .then((data) => {
          cachedData = data;
          return { data };
        })
        .catch((err) => {
          return { error: err };
        })
        .finally(() => {
          inProgress = null;
        });
      return inProgress;
    },
  };
};
