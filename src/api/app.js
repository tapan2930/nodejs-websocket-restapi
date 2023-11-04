const express = require("express");

// import custom routes

const resourcesRoutes = require("./routes/resources");

const app = express();
const port = 3000;

// custom routes

// middlewares
app.use(express.json());

// routes
app.use("/api", resourcesRoutes);

// Sample resource storage
const resources = [];

// Handle errors
app.use((err, req, res, next) => {
  console.error(`API Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`RESTful API Server is listening on port ${port}`);
});
