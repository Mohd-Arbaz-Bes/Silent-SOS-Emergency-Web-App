const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmergencyEmail = async ({ to, userName, latitude, longitude }) => {
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "🚨 Emergency SOS Alert",
      html: `
        <h2>Emergency SOS Alert</h2>

        <p><strong>${userName}</strong> has triggered an SOS alert.</p>

        <p>
          <a href="${mapLink}">📍 Open Live Location</a>
        </p>

        <p>${mapLink}</p>

        <hr>
        <small>Silent SOS Emergency Web App</small>
      `,
    });

    console.log("✅ Email Sent:", info.messageId);
  } catch (err) {
    console.error("❌ Full Email Error:", err);
    throw err;
  }
};

module.exports = {
  sendEmergencyEmail,
};
