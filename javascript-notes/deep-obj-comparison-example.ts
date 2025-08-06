// 11. DEEP OBJECT COMPARISON
// Recursively compares objects for equality
const deepEqual = (obj1, obj2, visited = new WeakMap()) => {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return false;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }
  
  // Check for circular references
  // if visited has obj1, check its key/value pair is obj2 if so, 
  // return true which will say weve already done this obj2 and we can return up the 
  // stack and avoid circular references
  // if the visited obj1s value pair is not the same as the passed obj2
  // we can say there is a discrepancy in this already visited obj1 with obj2
  if (visited.has(obj1)) {
    return visited.get(obj1) === obj2;
  }

  // Mark this pair as being compared if it didnt exist in visited
  visited.set(obj1, obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
};

const deepEqual1 = (obj1, obj2, visited = new WeakMap()) => {
  if (obj1 === obj2) return true;

  if (obj1 == null || obj2 == null) return false;

  // so if either one is not an object we can assume some primitive is being used
  // we can then check if they are the same primitive
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  // Check for circular references
  // if visited has obj1, check its key/value pair is obj2 if so, 
  // return true which will say weve already done this obj2 and we can return up the 
  // stack and avoid circular references
  // if the visited obj1s value pair is not the same as the passed obj2
  // we can say there is a discrepancy in this already visited obj1 with obj2
  if (visited.has(obj1)) {
    return visited.get(obj1) === obj2;
  }

  // Mark this pair as being compared if it didnt exist in visited
  visited.set(obj1, obj2);


  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // smart pre check
  if (keys1.length !== keys2.length) return false;

  // now we hit the individual checks
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    // recursive check on child objects
    // is it possible for circular obj references? 
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}