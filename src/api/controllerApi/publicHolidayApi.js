const { publicHolidayModel } = require("../../models")

exports.holidayGetCtrl = async (req, res) => {
    try {
        const data = await publicHolidayModel.find()
        console.log(data, "data");
        if (data && data.length !== 0) {
            res
                .status(200)
                .json({
                    success: true,
                    data: data
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "There is no holiday available"
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: error
            })
    }
}

exports.holidayPostCtrl = async (req, res) => {
    try {
        console.log(req.body, 'body holiday');
        const holiday = await publicHolidayModel.findOne({ title: req.body.title })
        if (holiday) {
            res
                .status(400)
                .json({
                    success: false,
                    messages: "this title is allready exist"
                })
        } else {
            const data = await publicHolidayModel.create({
                title: req.body.title,
                start_Date: req.body.start_Date,
                end_Date: req.body.end_Date,
                discription: req.body.discription
            })
            console.log(data, "data holiday")
            res
                .status(200)
                .json({
                    success: true,
                    messages: data
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                messages: error
            })
    }

}