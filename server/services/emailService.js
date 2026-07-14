const axios = require("axios");

const sendEmergencyEmail = async ({
  to,
  userName,
  latitude,
  longitude,
}) => {
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Silent SOS Emergency",
          email: process.env.SENDER_EMAIL,
        },

        to: [
          {
            email: to,
          },
        ],

        subject: "🚨 Emergency SOS Alert",

        htmlContent: `
          <h2>🚨 Emergency SOS Alert</h2>

          <p><strong>${userName}</strong> has triggered an SOS alert.</p>

          <p>
            <strong>Live Location:</strong>
          </p>

          <p>
            <a href="${mapLink}">
              Open Google Maps
            </a>
          </p>

          <p>${mapLink}</p>

          <hr>

          <p>
            This message was sent automatically by the
            <strong>Silent SOS Emergency Web App</strong>.
          </p>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

   
  } catch (error) {
    console.error(
      "❌ Brevo Email Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = {
  sendEmergencyEmail,
};