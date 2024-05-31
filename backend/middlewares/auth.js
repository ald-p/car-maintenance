const expressJwt = require('express-jwt');

const auth = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'user', // attaches payload to req.user
  getToken: (req) => {
    // Extract token from Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
  },
});

module.exports = auth;
