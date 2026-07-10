const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const urlRoutes = require("./routes/urlRoutes");
const { redirectUrl } = require("./controllers/urlController");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/url", urlRoutes);
app.get("/:shortCode", redirectUrl);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "URL Shortener API is running ",
  });
});



const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});