const express = require('express');
// const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const secure = require('express-force-https');
const Validator = require('validator');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;
const publicPath = path.resolve(__dirname, 'client', 'build');

const isEmpty = (value) => (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
);

const validateMessage = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) ?  data.name : '';
    data.email = !isEmpty(data.email) ?  data.email : '';
    data.message = !isEmpty(data.message) ?  data.message : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Your name is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email Address is required!';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email Address!';
    }

    if (Validator.isEmpty(data.message)) {
        errors.message = 'Your message is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

app.use(express.static(publicPath));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(secure);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.post('/contact', (req, res) => {
    // const transporter = nodemailer.createTransport({
    //     host: 'mail.privateemail.com',
    //     port: 465,
    //     secure: true, // true for 465, false for other ports
    //     auth: {
    //         user: process.env.PRIVATE_EMAIL_USERNAME,
    //         pass: process.env.PRIVATE_EMAIL_PASSWORD
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

    const { errors, isValid } = validateMessage(req.body);

    if (!isValid) {
        return res.status(400).json({ errors })
    }

    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'contact@abiaministryofeducation.org',
        from: email,
        subject: `Message from ${name} via abiaministryofeducation.org`,
        text: message
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    return res.status(200).json({ msg: 'Message sent' })
});

app.listen(port, () => console.log(`Server running on port ${port}. . .`));