const jwt = require("jsonwebtoken");

exports.clientAssign = async (req, res) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        const user = jwt.verify(token, "secretkeyappearshere");
        const data = await clientAssignModel.find();
        if (user) res.status(200).json({success: true, user, message: data });
        else res.status(500).json({success: false, message: "No data available" });
    } catch (error) {
        res.status(500).json({success: false, message: error });
    };
};

exports.clientAssignPost = async (req, res) => {
    try {
        if(req.query.id){
            req.body.start_Date = new Date(req.body.start_Date);
          if(req.body.end_Date) req.body.end_Date = new Date(req.body?.end_Date);
            const data = await clientAssignModel.findOneAndUpdate({_id: req.query.id },req.body);
            res.status(200).json({success: true, message: data });
        }else {
            const data = await clientAssignModel.create(req.body);
            res.status(200).json({success: true, message: data });  
        }
    } catch (error) {
        res.status(500).json({success: false, message: error });
    };
};

exports.clientUpdate = async (req, res) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        const user = jwt.verify(token, "secretkeyappearshere");
        const id = req.query.id;
        const data = await clientAssignModel.findOne({ _id: id });
      if(user && data) res.status(200).json({success: true,user, message: data });
      else res.status(500).json({success: false, message: "No data available" });
    } catch (error) {
        res.status(500).json({success: false, message: error });
    };
};

exports.clientDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await clientAssignModel.deleteOne({ _id: id });
        res.status(200).json({success: true, message: data  });
    } catch (error) {
        res.status(500).json({success: false, message: error });
    };
};