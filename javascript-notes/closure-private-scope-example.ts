// 1. CLOSURES & PRIVATE VARIABLES
// Demonstrates how closures create private scope
const createCounter = () => {
  let count = 0; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
    reset: () => {
      count = 0;
    },
  };
};

const counter = createCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1
// count is not accessible from outside

// reps
const createCounter1 = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
    reset: () => {
      count = 0;
    },
  };
};
// count is not accessible from outside

// Factory function that returns middleware with configured options
const createAuthMiddleware = (options: any) => {
  // closed variables
  const secretKey = options.secretKey || process.env.JWT_SECRET;
  const skipPaths = options.skipPath || ["/login", "/register"];
  const tokenHeader = options.tokenHeader || "authorization";

  // return function for middleware
  return function authMiddleware(req, res, next) {
    // this function is the 'defined' way of accessing the inner variables

    // skip auth for certain paths
    if (skipPaths.includes(req.path)) {
      return next();
    }

    const token = req.headers[tokenHeader]?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "no token" });

    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(403).json({ error: 'Invalid token' });
    }
  };
};

const apiAuth = createAuthMiddleware({
  secretKey: 'api-secret-key',
  skipPaths: ['/api/health', '/api/login'],
  tokenHeader: 'x-api-token'
});

const webAuth = createAuthMiddleware({
  secretKey: 'web-secret-key',
  skipPaths: ['/login', '/register', '/forgot-password'],
});

// const app = express();
// app.use('/api', apiAuth);
// app.use('/dashboard', webAuth);