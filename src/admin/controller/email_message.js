const emailModel = require('../../models/emailModel');
const nodemailer = require('nodemailer');

exports.emailMessage = async (req,res) => {
    const data = await emailModel.find();
    res.render("emailmessage",{data})
}

exports.sendMail = async(req, res) => {
    try {
        const {To,subject,body} = req.body;
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'niteshsharma.img@gmail.com',
                pass: 'lozevcyhwjnidozt'
            }
        });

        let mailDetails = {
            from: 'niteshsharma.img@gmail.com',
            to: To,
            subject: subject,
            text: body
        };

        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log(err,'Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        const data = new emailModel ({
            "To":To,
            "subject":subject,
            "body":body,
            "from":"niteshsharma.img@gmail.com"
        })
        data.save();
        res.redirect('back');
    } catch (error) {
        console.log(error);
        throw error;
    }
}