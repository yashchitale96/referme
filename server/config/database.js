const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Connected to the database");
    })
    .catch((err) => {
      console.error("❌ Error connecting to the database:", err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
