const express = require("express");
const router = express.Router();

const {
  getResources,
  createResource,
  deleteResources,
} = require("../controllers/resources");

// routers for crud operations
router.get("/resources/:id", getResources);
router.post("/resources", createResource);
router.delete("/resources/:id", deleteResources);

module.exports = router;
