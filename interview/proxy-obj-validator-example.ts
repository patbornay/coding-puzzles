// 6. PROXY FOR OBJECT VALIDATION
// Intercepts property access and modification
const createValidatedUser = (user) => {
  return new Proxy(user, {
    set(target, property, value) {
      if (property === 'email' && !value.includes('@')) {
        throw new Error('Invalid email format');
      }
      
      if (property === 'age' && (value < 0 || value > 150)) {
        throw new Error('Invalid age');
      }
      
      target[property] = value;
      return true;
    },
    
    get(target, property) {
      if (property === 'displayName') {
        return `${target.firstName} ${target.lastName}`;
      }
      return target[property];
    }
  });
};

const user = createValidatedUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  age: 30
});