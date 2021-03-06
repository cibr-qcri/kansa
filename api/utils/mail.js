const nodemailer = require('nodemailer');

exports.activationEmailTemplate = ({ to, firstName, url, token }) => {
  return {
    to,
    subject: 'Account activation',
    html: `
      <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
      </head>
      <body>
        <p>Hi ${firstName},</p>
        <p>Your user account has been created. To activate it, click <a href=${url}/${token}>here</a>.
        <p>The Kansa team</p>
      </body>
      </html>
    `,
  };
};

exports.searchAlertEmailTemplate = ({ to, firstName, query, searchUrl, alertsUrl }) => {
  return {
    to,
    subject: 'New search results',
    html: `
      <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
      </head>
      <body>
        <p>Hi ${firstName},</p>
        <p>We have new search results for the query "${query}".</p>
        <p>To see the results, click <a href=${searchUrl}>here</a>. 
        To manage your alerts, click <a href=${alertsUrl}>here</a>.</p>
        <p>The Kansa team</p>
      </body>
      </html>
    `,
  };
};

exports.sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to,
    subject,
    html,
  });

  console.log(`Email sent with message id %s`.green, info.messageId);
};
