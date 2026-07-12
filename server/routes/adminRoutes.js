const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
  dashboard,
  getUsers,
  deleteUser,
  getAlerts,
  updateAlert,
  deleteAlert,
  deleteSelectedAlerts,
} = require("../controllers/adminController");

router.get("/users", protect, admin, getUsers);

router.delete("/users/:id", protect, admin, deleteUser);

router.get(
  "/alerts",
  protect,
  admin,
  getAlerts
);

router.put(
  "/alerts/:id",
  protect,
  admin,
  updateAlert
);
router.delete(
  "/alerts/:id",
  protect,
  admin,
  deleteAlert
);

router.delete(
  "/alerts",
  protect,
  admin,
  deleteSelectedAlerts
);

module.exports = router;
