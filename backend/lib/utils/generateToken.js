import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => { 
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d', // Token expiration time
  });

  // Set the token in a cookie
  res.cookie('jwt', token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    maxAge: 30 * 24 * 60 * 60 * 1000, 
    sameSite: 'Strict', // Helps prevent CSRF attacks
  });
}