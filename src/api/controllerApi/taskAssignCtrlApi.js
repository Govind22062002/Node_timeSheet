const { taskAssignModel } = require("../../models")

exports.taskAssignGetCtrl = async (req,res) => {
    try {
        const data = await taskAssignModel.find()
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

exports.taskAssignPostCtrl = async (req,res) => {
try {
    const users = await taskAssignModel.findOne({employee_Id : req.body.employee_Id })
    if(users){
        res
        .status(400)
        .json({
            success: false,
            messages: "user is allready signed"
        })
    }else{
      try {
        const data = await taskAssignModel.create({
            employee_Id : req.body.employee_Id,
            status: req.body.status,
            Work_Hour : req.body.Work_Hour,
            start_Date: req.body.start_Date,
            end_Date: req.body.end_Date
        })
                res
                    .status(200)
                    .json({
                        success: true,
                        data: data
                    })
      } catch (error) {
        res
        .status(400)
        .json({
            success: false,
            messages: error
        })
      }
     
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