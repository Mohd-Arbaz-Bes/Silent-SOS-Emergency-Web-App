const Alert = require("../models/Alert");
const User = require("../models/User");
const Contact = require("../models/Contact");

const { sendEmergencyEmail } = require("../services/emailService");

const createAlert = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const alert = await Alert.create({
      user: req.user.id,
      latitude,
      longitude,
      status: "Sent",
    });
    const io = req.app.get("io");
    console.log("Sending newAlert event...");

    io.emit("newAlert", alert);
    console.log("newAlert event sent");

    const user = await User.findById(req.user.id);

    const contacts = await Contact.find({
      user: req.user.id,
    });


    res.status(201).json({
      success: true,
      alert,
    });


    for (const contact of contacts) {
      if (contact.email) {
        sendEmergencyEmail({
          to: contact.email,
          userName: user.name,
          latitude,
          longitude,
        }).catch((err) => {
          console.error("Email Error:", err.message);
        });
      }
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(alerts);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateAlertStatus = async (req, res) => {
  try {
    const alert = await Alert.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }

    alert.status = req.body.status;

    if (req.body.status === "Resolved") {
      alert.resolvedAt = new Date();
    }

    await alert.save();

    res.json(alert);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createAlert,
  getAlerts,
  updateAlertStatus,
};
