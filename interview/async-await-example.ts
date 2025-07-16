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

const promise1 = profileService.getProfile();
const promise2 = profileService.getProfile();
const promise3 = profileService.getProfile();

// You can now use these promises with async/await as well:
async function example() {
  const result1 = await profileService.getProfile();
  const result2 = await profileService.getProfile(); // Will use cached data

  console.log(result1, result2);
}
