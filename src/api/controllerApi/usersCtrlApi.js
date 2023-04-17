const { teamMatesModel } = require("../../models")

exports.usersGetCtrl = async (req, res) => {
    try {
        const data = await teamMatesModel.find()
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
                    message: "There is no users data available"
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

exports.usersPostCtrl = async (req, res) => {
    try {
        console.log(req.body, "fasdkfh");
        const user = await teamMatesModel.findOne({ email: req.body.email })
        if (user) {
            res
                .status(400)
                .json({
                    success: false,
                    messages: "email Id is allready exist"
                })
        } else {
            const data = await teamMatesModel.create({
                name: req.body.name,
                type: req.body.type,
                email: req.body.email,
                Phone: req.body.phone,
                date_Of_Birth: req.body.date_Of_Birth,
                status: req.body.status,
                jobType: req.body.jobType,
                joining_Date: req.body.joining_Date
            })
            console.log(data);
            res
                .status(200)
                .json({
                    success: true,
                    data: data
                })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.usersDeleteCtrl = async (req, res) => {
    try {
        console.log(req.query, "query Delete users");
        const data = await teamMatesModel.deleteOne({ _id: req.query.id })
        console.log(data);
        res
            .status(200)
            .json({
                success: true,
                message: data
            })
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: error
            })
    }
}

exports.usersUpdateCtrl = async (req, res) => {
    e
    try {
        console.log(req.query, 'query update users')
        console.log(req.body, "body update users ")
        const data = await teamMatesModel.updateOne(
            { _id: req.query.id },
            {
                name: req.body?.name,
                type: req.body?.type,
                email: req.body?.email,
                Phone: req.body?.phone,
                date_Of_Birth: req.body?.date_Of_Birth,
                status: req.body?.status,
                jobType: req.body?.jobType,
                joining_Date: req.body?.joining_Date
            }
        )
        console.log(data, "data update users")
        res
            .status(200)
            .json({
                success: true,
                message: data
            })
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: error
            })
    }

}