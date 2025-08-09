// 6. PROXY FOR OBJECT VALIDATION
// Intercepts property access and modification
const createValidatedUser = (user) => {
  return new Proxy(user, {
    set(target, property, value) {
      if (property === "email" && !value.includes("@")) {
        throw new Error("Invalid email format");
      }

      if (property === "age" && (value < 0 || value > 150)) {
        throw new Error("Invalid age");
      }

      target[property] = value;
      return true;
    },

    get(target, property) {
      if (property === "displayName") {
        return `${target.firstName} ${target.lastName}`;
      }
      return target[property];
    },
  });
};

const user0 = createValidatedUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  age: 30,
});

// reps
const createValidatedUser1 = (user) => {
  return new Proxy(user, {
    set(target, property, newValue) {
      if (property === "email" && !newValue.includes("@")) {
        throw new Error("Invalid email format");
      }

      if (property === "age" && (newValue < 0 || newValue > 150)) {
        throw new Error("Invalid age");
      }

      target[property] = newValue;
      return true;
    },
    get(target, property) {
      if (property === "displayName") {
        return `${target.firstName} ${target.lastName}`;
      }
      return target[property];
    },
  });
};

const user1 = createValidatedUser1({
  firstName: "John",
  lastName: "Doe",
  email: "jd@example.com",
  age: 30,
});

// the methods defined in the handler object passed to the Proxy are thought of as traps 
// so everytime an object is accessed that has been built wit ha proxy the dot notation methods 
// are already being affected by the defined handler methods 

user1.displayName // will hit th get trap defined in the proxy handler obj

user1["email"] = "bad email" // will throw an error as set by the set trap for that property

