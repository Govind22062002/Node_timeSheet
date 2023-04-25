const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { roleModel, departmentModel, userModel, emailModel,
     leaveManagementModel, statusManagementModel } = require("../../models");

exports.loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userModel.findOne({ email });
        console.log(data);
        if (!data) {
            res.status(500).json({success : false, message :"email id is Wrong" });
        } else {
            const isMatch = await bcrypt.compare(password, data.password);
            console.log(isMatch);
            if (isMatch) {
              let token = jwt.sign(
                    { userId: data._id, email: data.email, name : data.name },
                    "secretkeyappearshere"
                  );
                res.status(200).json({success : true, token, message :data });
            } else {
                res.status(500).json({success : false, message :"your password is Wrong" });
            }
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    }
};

exports.registerPost = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            res.status(500).json({success : false, message :"email id is Wrong" });
        } else {
            const hashed = await bcrypt.hash(password, 10);
            req.body.password = hashed;
            const data = await userModel.create(req.body);
            res.status(200).json({success : true, message :data });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    };
}

exports.index = async (req, res) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        const user = jwt.verify(token, "secretkeyappearshere");
        const userCount = await userModel.find().count();
        const leaveCount = await leaveManagementModel.find({action:'approved'}).count();
        const projectCount = await statusManagementModel.find().count();
        const emailCount = await emailModel.find().count();
        if (user && userCount && emailCount && leaveCount && projectCount)res.status(200)
        .json({success : true, message : { user, userCount, leaveCount, projectCount, emailCount}});
        else res.status(500).json({success : false, message :"data is not found" });
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    }
}

exports.usersGetCtrl = async (req, res) => {
    try {
        const role = await roleModel.find();
        const department = await departmentModel.find({isActive:true});
        const data = await userModel.aggregate([
            {
              '$lookup': {
                'from': 'roles', 
                'localField': 'role', 
                'foreignField': '_id', 
                'as': 'result'
              }
            }, {
              '$unwind': {
                'path': '$result'
              }
            }, {
              '$project': {
                'name': 1, 
                'role': '$result.role_name', 
                'password': 1, 
                'dept': 1, 
                'email': 1, 
                'status': 1, 
                'phone': 1, 
                'dob': 1, 
                'jobType': 1, 
                'joiningDate': 1
              }
            }
          ]);
        if (data && data.length !== 0) {
            res.status(200).json({success: true,message: { data, role, department }});
        } else {
            res.status(400).json({ success: false, message: "There is no users data available"});
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error});
    }

}

exports.usersPostCtrl = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ success: false, messages: "email Id is allready exist" });
        } else {
            const randomString1 = Math.random().toString(36).slice(2, 10);
            const hashed = await bcrypt.hash(randomString1, 10);
            req.body.password = hashed;
            const data = await userModel.create(req.body);
            res.status(200).json({ success: true,data: data });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error});
    }
};


exports.usersDeleteCtrl = async (req, res) => {
    try {
        const data = await userModel.deleteOne({ _id: req.query.id });
        res.status(200).json({success: true, message: data });
    } catch (error) {
        res.status(400).json({success: false,message: error});
    }
};

exports.usersUpdateCtrl = async (req, res) => {
    try {
        const data = await userModel.updateOne(
            { _id: req.query.id },req.body);
        res.status(200).json({success: true,message: data});
    } catch (error) {
        res.status(400).json({success: false,message: error});
    }
};