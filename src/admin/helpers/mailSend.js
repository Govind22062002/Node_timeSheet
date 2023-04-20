const nodemailer = require('nodemailer');

exports.sendMail = async (req, subject, body) => {
    try {
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'niteshsharma.img@gmail.com',
                pass: 'lozevcyhwjnidozt'
            }
        });

        let mailDetails = {
            from: 'niteshsharma.img@gmail.com',
            to: req.body.email,
            subject: subject,
            text: body
        };

        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log(err, 'Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        
        return;
    } catch (error) {
        throw error;
    }
}