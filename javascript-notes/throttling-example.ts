// 9. THROTTLING
// Limits function execution to once per time period
const throttle = (func, limit) => {
  let inThrottle;
  
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const handleScroll = throttle(() => {
  console.log('Scroll event handled');
}, 100);