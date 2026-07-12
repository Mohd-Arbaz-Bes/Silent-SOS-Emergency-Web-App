const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  saveLocation,
  getLocations,
} = require("../controllers/locationController");

router.use(protect);

router.post("/", saveLocation);

router.get("/:alertId", getLocations);

module.exports = router;