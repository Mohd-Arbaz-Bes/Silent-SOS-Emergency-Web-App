const User = require("../models/User");
const Alert = require("../models/Alert");

const dashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalAlerts = await Alert.countDocuments();

    const activeAlerts = await Alert.countDocuments({
      status: "Sent",
    });

    const resolvedAlerts = await Alert.countDocuments({
      status: "Resolved",
    });

    res.json({
      totalUsers,

      totalAlerts,

      activeAlerts,

      resolvedAlerts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find()
      .populate("user", "fullName email phone")
      .sort({ createdAt: -1 });

    res.json(alerts);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateAlert = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert Not Found",
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

const deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert Not Found",
      });
    }

    await Alert.findByIdAndDelete(req.params.id);

    res.json({
      message: "Alert Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteSelectedAlerts = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || ids.length === 0) {
      return res.status(400).json({
        message: "No alerts selected",
      });
    }

    await Alert.deleteMany({
      _id: { $in: ids },
    });

    res.json({
      message: "Selected Alerts Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  dashboard,
  getUsers,
  deleteUser,
  getAlerts,
  updateAlert,
  deleteAlert,
  deleteSelectedAlerts,
};
