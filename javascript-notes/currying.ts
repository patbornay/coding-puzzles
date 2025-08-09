// 8. CURRYING
// Transforms function to accept arguments one at a time
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

const add = curry((a, b, c) => a + b + c);
const addFive = add(5);
const addFiveAndThree = addFive(3);
console.log(addFiveAndThree(2)); // 10

// Curried function 
const createValidator = (validationRules) => (fieldName) => (value) => {
  const errors: any[] = [];

  for (const rule of validationRules) {
    const result = rule(value, fieldName);
    if (result !== true) {
      errors.push(result);
    }
  }

  return errors.length === 0 ? true : errors;
};

// Use example
const required = (value, fieldName) => (value) !== null && value !== '' ? true : `${fieldName} is required`;
const minLength = (min) => (value, fieldName) => value && value.length <= min ? true : `${fieldName} must be no more than ${min} characters`;
const maxLength = (max) => (value, fieldName) => value && value.length >= max ? true : `${fieldName} must be no more than ${max} characters`;

// Reps 