const { clientAssignModel } = require("../../models");

exports.clientAssign = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await clientAssignModel.find();
        if (user) res.render("clientAssign", { user, data});
        else res.redirect("back");  
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.clientAssignPost = async (req, res) => {
    try {
        if(req.query.id){
            req.body.start_Date = new Date(req.body.start_Date);
          if(req.body.end_Date) req.body.end_Date = new Date(req.body?.end_Date);
            const data = await clientAssignModel.findOneAndUpdate({_id: req.query.id },req.body);
            res.redirect("/clientAssign");
        }else {
            const data = await clientAssignModel.create(req.body);
            res.redirect("back");   
        }
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.clientUpdate = async (req, res) => {
    try {
        const user = req.session.username;
        const id = req.query.id;
        const data = await clientAssignModel.findOne({ _id: id });
      if(user) res.render("clientUpdate", { user, data });
      else res.redirect("back");
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.clientDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await clientAssignModel.deleteOne({ _id: id });
        res.redirect("back");
    } catch (error) {
        console.log(error);
        throw error;
    };
};