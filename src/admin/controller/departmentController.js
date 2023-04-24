const { departmentModel } = require('../../models');

exports.viewDepartment = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await departmentModel.find({isActive:true});
        res.render('department',{user, data});
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.departmentCreate = async (req, res) => {
    try {
        await departmentModel.create(req.body);
        res.redirect('/view-department');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.departmetUpdate = async (req, res) => {
    try {
        const {_id} = req.params;
        const update = await departmentModel.updateOne({_id:id},req.body);
        res.reditect('/view-department');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.departmetdelete = async (req, res) => {
    try {
        const {id} = req.params;
        const update = await departmentModel.updateOne({_id:id},{isActive:true});
        res.redirect('/view-department');
    } catch (error) {
        console.log(error);
        throw error;
    }
}