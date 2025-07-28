const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies ? req.cookies.token : null;
  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided. Authorization denied." });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token. Authorization denied." });
  }
}; 