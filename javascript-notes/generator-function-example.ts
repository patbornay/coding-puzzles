// 7. GENERATOR FUNCTIONS
// Creates iterators for lazy evaluation
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

function* take(iterator, count) {
  for (let i = 0; i < count; i++) {
    const { value, done } = iterator.next();
    if (done) break;
    yield value;
  }
}

const numbers = infiniteSequence();
const firstTen = [...take(numbers, 10)]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]