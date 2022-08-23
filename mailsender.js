const nodemailer = require("nodemailer");
const secrets = require("./secrets");
async function mailSender() {
    // input through which mechanism send your email
    //  -> port, facilitator (technical details) 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: secrets.APP_EMAIL,
            pass: secrets.APP_PASSWORD
        }
    });
    let token = "sdmfbdskbdb";
    let dataObj = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "harmeetsingh152@gmail.com", // list of receivers
        subject: " Testing ", // Subject line
        html: `<b>HTML text testing email  ${token}?</b>`,
    }
    // send mail with defined transporter object
    let info = await transporter.sendMail(dataObj);
}
mailSender()
    .then(function () {
        console.log("mail sent successfully")
    })
    .catch(console.error);