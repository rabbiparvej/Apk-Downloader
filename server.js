
require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");

const app = express();

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(
  path.join(__dirname, "public")
));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    name: "NexaGHOR Apk",
    status: "online"
  });
});

app.get("/api/apps", async (req, res) => {
  try {
    // PostgreSQL integration will be added here.
    res.json({
      success: true,
      apps: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`NexaGHOR Apk running on ${PORT}`);
});
