const { clientAssignModel, statusManagementModel } = require("../../models");
 
exports.statusManagement = async (req, res) => {
   try {
    const user = req.session.username;
    const clients = await clientAssignModel.find();
    const data = await statusManagementModel.aggregate([
        {
          '$lookup': {
            'from': 'users', 
            'localField': 'employee_ID', 
            'foreignField': '_id', 
            'as': 'result'
          }
        }, {
          '$lookup': {
            'from': 'clientassigns', 
            'localField': 'client_ID', 
            'foreignField': '_id', 
            'as': 'client'
          }
        }, {
          '$unwind': {
            'path': '$result'
          }
        }, {
          '$unwind': {
            'path': '$client'
          }
        }, {
          '$project': {
            'employeeName': '$result.name', 
            'clientName': '$client.clientName', 
            'work_Type': 1, 
            'date': 1, 
            'Time': 1, 
            'discription': 1
          }
        }
      ]);
    if(user) res.render("statusManagement",{user, clients , data} );   
       else res.redirect("back") ;
   } catch (error) {
    console.log(error);
    throw error;
   };
};

exports.statusManagementPost =async (req,res) => {
    try {
        const user = req.session.username;
        if(user){
        req.body.employee_ID = user._id; 
        const data = await statusManagementModel.create(req.body);
        res.redirect("back");
       }else res.redirect("back") ;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.statusUpdate = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await statusManagementModel.updateOne({ _id: id });
        res.redirect("back");
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.statusDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await statusManagementModel.deleteOne({ _id: id });
        res.redirect("back");
    } catch (error) {
        console.log(error);
        throw error;
    };
};
