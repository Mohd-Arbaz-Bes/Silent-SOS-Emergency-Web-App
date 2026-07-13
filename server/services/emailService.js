const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4,
});

const sendEmergencyEmail = async ({ to, userName, latitude, longitude }) => {
  try {
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const info = await transporter.sendMail({
      from: `"Silent SOS" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🚨 Emergency SOS Alert",

      html: `
<div style="font-family:Arial,sans-serif;padding:20px;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:10px">

<h2 style="color:#dc2626;">🚨 Emergency SOS Alert</h2>

<p><b>${userName}</b> has triggered an emergency SOS alert.</p>

<p>Please click the button below to view the live location.</p>

<p style="text-align:center;margin:30px 0;">
<a href="${mapLink}" style="background:#dc2626;color:#fff;padding:14px 22px;text-decoration:none;border-radius:8px;font-weight:bold;">
📍 Open Live Location
</a>
</p>

<p>If the button doesn't work, copy this link:</p>

<p>${mapLink}</p>

<hr>

<p style="color:gray;font-size:13px;">
Silent SOS Emergency Web App
</p>

</div>
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
