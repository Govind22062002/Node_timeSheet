const { publicHolidayModel } = require("../../models")

exports.holidayGetCtrl = async (req, res) => {
    try {
        const data = await publicHolidayModel.find()
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

exports.holidayDeleteCtrl = async (req,res) => {
  try{
   if(req.query.id){
    const data = await publicHolidayModel.deleteOne({_id : req.query.id})
    res
    .status(200)
    .json({
      success : true,
      message : data
    })
   }
    
  }catch(error){
    res
    .status(400)
    .json({
      success : false,
      message : error
    })
  }    
}

exports.holidayUpdateCtrl = async (req,res) => {
    try{
    const data = await publicHolidayModel.updateOne(
        {_id: req.query.id},
        {
            title: req.body?.title,
            start_Date: req.body?.start_Date,
            end_Date: req.body?.end_Date,
            discription: req.body?.discription
        })
        res
        .status(200)
        .json({
            success : true,
            message : data
        })
    }catch (error){
        res
        .status(400)
        .json({
            success : false,
            message : error
        })
    }
   
}