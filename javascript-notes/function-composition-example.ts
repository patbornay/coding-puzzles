// 12. FUNCTION COMPOSITION
// Combines multiple functions into one
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composedFn = compose(square, double, addOne);
console.log(composedFn(3)); // square(double(addOne(3))) = square(8) = 64

const pipedFn = pipe(addOne, double, square);
console.log(pipedFn(3)); // square(double(addOne(3))) = square(8) = 64

