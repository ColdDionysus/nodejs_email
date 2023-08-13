const nodemailer = require('nodemailer')
require('dotenv').config()
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASS
    }
});
const main = async () => {
    
    const info = await transporter.sendMail({
        from: '"Pukar Gautam 👻" <gautampukar01@gmail.com>', // sender address
        to: "gautampukar01@gmail.com, gautampukar02@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    
}

main().catch(console.error);