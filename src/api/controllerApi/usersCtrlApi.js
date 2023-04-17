const { teamMatesModel } = require("../../models")

exports.usersGetCtrl = async (req,res) => {
   try {
    const data = await teamMatesModel.find()
    console.log(data, "data");
    if(data && data.length !== 0){
        res
        .status(200)
        .json({
            success : true ,
            data : data
        })
    }else {
        res
        .status(400)
        .json({
            success : false ,
            message : "There is no users data available"
        })
    }
   } catch (error) {
    res
    .status(400)
    .json({
        success : false ,
        message : error
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
                date_Of_Birth: new Date(req.body.date_Of_Birth),
                status: req.body.status,
                jobType: req.body.jobType,
                joining_Date: new Date(req.body.joining_Date)
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