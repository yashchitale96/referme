const express = require("express");
const AuthRouter = express.Router();
const { login, register } = require("../controllers/auth");

AuthRouter.post("/login", login);
AuthRouter.post("/register", register);

// Auth check route
AuthRouter.get("/auth/check", (req, res) => {
  if (req.cookies && req.cookies.token) {
    return res.json({ success: true });
  }
  return res.json({ success: false });
});

// Logout route
AuthRouter.post("/auth/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/'
  });
  return res.json({ success: true, message: "Logged out successfully." });
});

module.exports = AuthRouter;