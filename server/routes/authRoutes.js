const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const validate = require("../middleware/validationMiddleware");

// Register
router.post(
  "/register",
  [
    body("fullName")
      .notEmpty()
      .withMessage("Full Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("phone")
      .notEmpty()
      .withMessage("Phone number is required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],

  validate,

  registerUser
);

// Login
router.post("/login", loginUser);

// Profile
router.get("/profile", protect, getProfile);

module.exports = router;