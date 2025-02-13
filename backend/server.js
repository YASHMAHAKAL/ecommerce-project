const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("E-commerce Backend is running!");
});

// Define PORT (Default: 5000)
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

