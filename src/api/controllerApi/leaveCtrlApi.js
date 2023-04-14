const {leaveManagementModel} = require("../../models")

exports.leaveGetCtrl = async (req,res) => {
    try {
        const data = await leaveManagementModel.find()
        console.log(data, "data");
        if (data && data.length !== 0 ) {
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
                    message: "There is no data available"
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

exports.leavePostCtrl = async (req,res) => {
    try {
        console.log(req.body , 'leave body');
        const users = await leaveManagementModel.findOne({employee_Id : req.body.employee_Id })
        console.log(users, "users");
        if(users){
            console.log("asdklfjlksdjglkad");
            console.log(users)
            res
            .status(400)
            .json({
                success: false,
                messages: "user is allready signed"
            })
        }else{  
            const user = await leaveManagementModel.create({
                employee_Id : req.body.employee_Id,
                leaveType: req.body.leaveType,
                from : req.body.from,
                to  : req.body.to,
                reason: req.body.reason, 
                action: req.body.action,
             })
             console.log(user ,"data");
             res
             .status(200)
             .json({
                success : true,
                message : user
             })   
        }
    } catch (error) {
        res
        .status(400)
        .json({
           success : false,
           message : error
        })   
    }

}
