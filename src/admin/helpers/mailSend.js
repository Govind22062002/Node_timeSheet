const nodemailer = require('nodemailer');

exports.sendMail = async (req, subject, body) => {
    try {
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'timesheetracker7@gmail.com',
                pass: 'plfmolrwbemmtejo'
            }
        });
        let mailDetails = {
            from: 'timesheetracker7@gmail.com',
            to: req.body?.To || req,
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