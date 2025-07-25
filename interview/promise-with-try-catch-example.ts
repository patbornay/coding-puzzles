// 3. PROMISE CHAINING & ERROR HANDLING
// Shows proper async error handling and transformation
const processUserData = async (userId) => {
  try {
    const user = await fetch(`/api/users/${userId}`).then((res) =>
      res.ok ? res.json() : Promise.reject(res) // reject will lead to the catch block
    );

    const preferences = await fetch(`/api/users/${userId}/preferences`).then(
      (res) => (res.ok ? res.json() : { theme: "default" })
    );

    return {
      ...user,
      preferences,
      processedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Failed to process user data:", error);
    return { error: "User data unavailable" };
  }
};

// reps
const processUserData1 = async (userId) => {
  try {
    const user = await fetch(`url ${userId}`).then((res) =>
      res.ok ? res.json() : Promise.reject(res)
    );

    const perferences = await fetch(`preferences ${userId}`).then((res) =>
      res.ok ? res.json() : { theme: "default" }
    );

    return {
      ...user,
      perferences,
      processedAt: new Date().toISOString(),
    };
  } catch (error) {
    return { error: "User data unavailable" };
  }
};
