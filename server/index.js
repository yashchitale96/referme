const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PdfRouter = require("./routes/pdf");
const AuthRouter = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://referme.tech", credentials: true }));
app.use(cookieParser());

app.use("/", PdfRouter);
app.use("/", AuthRouter);

// Health check route for Azure
app.get("/health", (req, res) => res.status(200).send("OK"));

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});