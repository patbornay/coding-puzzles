// 1. CLOSURES & PRIVATE VARIABLES
// Demonstrates how closures create private scope
const createCounter = () => {
  let count = 0; // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
    reset: () => { count = 0; }
  };
};

const counter = createCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1
// count is not accessible from outside