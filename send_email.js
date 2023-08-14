const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { promisify } = require("util");
const fs = require("fs");
require('dotenv').config()

const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASS,
  },
});

async function main(receivers, data, htmlFile) {
  const html = await readFile(htmlFile, "utf8");
  const template = handlebars.compile(html);

  const htmlToSend = template(data);

  const info = await transporter.sendMail({
    from: '"Pukar Gautam👻" <gautampukar01@gmail.com>', // sender address
    to: receivers.toString(), // list of receivers
    subject: "Hello ✔", // Subject line
    html: htmlToSend,
  });

  console.log("Message sent: %s", info.messageId);
}

// Change here
const data = {
  name: "Pukar Gautam",
  msg: "How are you??",
};
const htmlFile = "./email.html";
const receivers = ["gautampukar01@gmail.com"];
main(receivers, data, htmlFile).catch(console.error);