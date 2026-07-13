const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

dotenv.config();
console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
console.log("EMAIL_PORT:", process.env.EMAIL_PORT);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const connectDB = require("./config/db");
connectDB();

const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const alertRoutes = require("./routes/alertRoutes");
const locationRoutes = require("./routes/locationRoutes");
const adminRoutes = require("./routes/adminRoutes");

const errorHandler = require("./middleware/errorMiddleware");

const app = express();
app.set("trust proxy", 1);

app.use(helmet());

app.use(
  cors({
    origin: ["https://silent-sos-emergency-web-app.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests. Please try again later.",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    message: "Silent SOS API Running",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandler);
module.exports = app;
