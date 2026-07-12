const Contact = require("../models/Contact");

// Add Contact
const addContact = async (req, res) => {
  try {
    const { name, relationship, phone, email } = req.body;

    if (!name || !relationship || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Relationship and Phone are required.",
      });
    }

    const contact = await Contact.create({
      user: req.user.id,
      name,
      relationship,
      phone,
      email,
    });

    res.status(201).json({
      success: true,
      message: "Contact added successfully.",
      contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Contact
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    contact.name = req.body.name || contact.name;
    contact.relationship =
      req.body.relationship || contact.relationship;
    contact.phone = req.body.phone || contact.phone;
    contact.email = req.body.email || contact.email;

    await contact.save();

    res.status(200).json({
      success: true,
      message: "Contact updated successfully.",
      contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
};