const Location = require("../models/Location");

const saveLocation = async (req, res) => {
  try {
    const { alertId, latitude, longitude } = req.body;

    const location = await Location.create({
      alert: alertId,
      latitude,
      longitude,
    });

    res.status(201).json({
      success: true,
      location,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

const getLocations = async (req, res) => {

  try {

    const locations = await Location.find({
      alert: req.params.alertId,
    }).sort({
      createdAt: 1,
    });

    res.json(locations);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  saveLocation,
  getLocations,
};