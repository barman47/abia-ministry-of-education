const express = require('express');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

const port = process.env.PORT;
const publicPath = path.resolve(__dirname, 'client', 'build');

app.use(express.static(publicPath));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.post('/contact', (req, res) => {
    console.log('contact');
    // const transporter = nodemailer.createTransport({
    //     host: 'mail.privateemail.com',
    //     port: 465,
    //     secure: true, // true for 465, false for other ports
    //     auth: {
    //         user: 'contact@abiaministryofeducation.org',
    //         pass: '@BIAmoe20'
    //     },
    // });

    // const mailOptions = {
    //     // from: 'contact@abiaministryofeducation.org',
    //     from: 'uzoanyadominic@gmail.com',
    //     to: 'nomsouzoanya@yahoo.co.uk',
    //     subject: 'Test Subject',
    //     text: 'Test text',
    //     html: '<h1>Test Html</h1>'
    // };

    // transporter.sendMail(mailOptions, (err, info) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).json({ err: 'Message not sent' })
    //     }
    //     console.log('Email sent: ' + info.response);
    //     return res.status(200).json({ msg: 'Message sent' })

    // });

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'uzoanyadominic@gmail.com',
        from: 'test@example.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    return res.status(200).json({ msg: 'Message sent' })
});

app.listen(port, () => console.log(`Server running on port ${port}. . .`));