const nodemailer = require('nodemailer');

const path = require('path'); // Import 'path' module for template path handling
require('dotenv').config();

// Configuring transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASS
    }
});


const main = async (receivers) => {
    const info = await transporter.sendMail({
        from: '"Pukar Gautam 👻" <gautampukar01@gmail.com>',
        to: receivers.toString(),
        subject: "Hello ✔",
        template: "example", // Use the name of your template here
        context: {
            name: "Pukar Gautam"
        }
    });

    console.log("Message sent: %s", info.messageId);
}

const receivers = ["gautampukar01@gmail.com", "gautampukar02@gmail.com"];

main(receivers).catch(console.error);
