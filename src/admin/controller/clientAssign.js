const {clientAssignModel} = require("../../models");

exports.clientAssign = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await clientAssignModel.find();
        if(user) res.render("clientAssign",{user,data});
        else res.redirect("back")
    } catch (error) {
        throw error;
    }
}

exports.clientAssignPost = async (req,res) => {
    try {
        const data = await clientAssignModel.create({
            clientName : req.body.clientName,
            projectName : req.body.projectName,
            status : req.body.status,
            start_Date : req.body.start_Date,
            end_Date : req.body.end_Date,
            discription : req.body.discription
        });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}

exports.clientDelete = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await clientAssignModel.deleteOne({ _id: id });
        res.redirect("back");
    } catch (error) {
        throw error
    }
}