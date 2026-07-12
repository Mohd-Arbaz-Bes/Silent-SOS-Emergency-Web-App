const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createAlert,
  getAlerts,
  updateAlertStatus,
} = require("../controllers/alertController");

router.use(protect);

router.post("/", createAlert);

router.get("/", getAlerts);

router.put("/:id", updateAlertStatus);

module.exports = router;