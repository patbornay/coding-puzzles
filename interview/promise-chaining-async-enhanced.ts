export const profileProviderEnhanced = () => {
  let inProgress: any = null;
  let cachedData = null;

  return {
    async getProfile() {
      if (cachedData) return { data: cachedData };
      if (inProgress) return inProgress;

      inProgress = fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          cachedData = data;
          return { data };
        })
        .catch(err => {
          return { error: err };
        })
        .finally(() => {
          inProgress = null;
        });

      return inProgress;
    },
    
    clearCache() {
      cachedData = null;
      inProgress = null;
    },
    
    isLoading() {
      return inProgress !== null;
    },
    
    hasCache() {
      return cachedData !== null;
    }
  };
};

// And if you used option 2:
const profileServiceExtended = profileProviderEnhanced();
profileServiceExtended.clearCache();
console.log("Is loading:", profileServiceExtended.isLoading());
console.log("Has cached data:", profileServiceExtended.hasCache());