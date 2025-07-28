const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Admin.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "No user found with this email." });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Password is incorrect." });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
        // Set token as HTTP-only cookie
        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
          maxAge: 2 * 60 * 60 * 1000, // 2 hours
          path: '/',
          //domain: '.onrender.com'
        });
        return res.json({ success: true, message: "Login successful." });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};

exports.register = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }
    try {
        const existingUser = await Admin.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Admin({ email, password: hashedPassword });
        await newUser.save();
        return res.json({ success: true, message: "User registered successfully." });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Server error." });
    }
}; 