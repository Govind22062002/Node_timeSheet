const { type } = require("os");
const { teamMatesModel } = require("../../models")

exports.teamMates = async (req,res) => {
   const data = await teamMatesModel.find()
    res.render("teamMates", {data})
}

exports.teamMates_Post = async (req,res) => {
    console.log(req.body, "body data");

    const data = await teamMatesModel.create({
     name : req.body.name,
     type : req.body.type,
     email : req.body.email,
     Phone : req.body.phone ,
     date_Of_Birth : new Date(req.body.date_Of_Birth) ,
     status : req.body.status,
     jobType : req.body.jobType,
     joining_Date : new Date(req.body.joining_Date) 
    })
    console.log(data);
    res.redirect("back")
}