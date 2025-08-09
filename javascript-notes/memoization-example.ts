// 4. MEMOIZATION
// Caches function results based on arguments
const memoize = (fn) => {
  const cache = new Map();
  
  return (...args) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// reps 
const memoize1 = (fn) => { // take any function
  const cache = new Map();

  // return a function that take any args, caches those args, and executes the original fn 
  // that was passed and then the returned function will also return the fn results
  return (...args) => {
    const key = JSON.stringify(args); // turn the args into a key

    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key,result);
    return result;
  }
}
// now we dont have to do the same calculations over and over, although this can be overkill
const maths = memoize((n1, n2) => {
  return n1 + n2;
})