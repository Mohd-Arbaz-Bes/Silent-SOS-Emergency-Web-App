const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify((error) => {
  if (error) {
    console.log("Email Config Error:", error);
  } else {
    console.log("Email Server Ready");
  }
});

const sendEmergencyEmail = async ({ to, userName, latitude, longitude }) => {
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "🚨 Emergency SOS Alert",

    html: `
      <h2>Emergency Alert</h2>

      <p><strong>${userName}</strong> has triggered an SOS alert.</p>

      <p>
        <strong>Location:</strong><br>
        Latitude: ${latitude}<br>
        Longitude: ${longitude}
      </p>

      <p>
        <a href="${mapLink}">
          View Live Location on Google Maps
        </a>
      </p>

      <hr>

      <small>
        Silent SOS Emergency Web App
      </small>
    `,
  });
};

module.exports = {
  sendEmergencyEmail,
};
