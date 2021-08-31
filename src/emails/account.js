const mailgun = require("mailgun-js");
// const api_key = process.env.MAILGUN_API
// const DOMAIN = process.env.DOMAIN
const mg = mailgun({ apiKey: process.env.MAILGUN_API, domain: process.env.DOMAIN });

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Welcome to the APP',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    };
    mg.messages().send(data, function (error, body) { });
}

const sendCancelationEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Goodbye',
        text: `Goodbye ${name}. I hope to see you back sometime soon`
    };
    mg.messages().send(data, function (error, body) { });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}