const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, text, attachmentBuffer, attachmentName = 'registration.pdf') => {
  try {
    await transporter.sendMail({
      from: `"Course Registration System" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      attachments: attachmentBuffer ? [{
        filename: attachmentName,
        content: attachmentBuffer
      }] : []
    });
    console.log("✅ Email sent to", to);
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
};

module.exports = sendEmail;
