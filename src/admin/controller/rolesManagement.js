const { roleModel } = require("../../models");

exports.getRoleList = async (req, res) => {
    try {
        const user = req.session.username;
        const data = await roleModel.find({ isActive: true }).select({ _id: 1, role_name: 1 });
        res.render("role", { data, user });
    } catch (error) {
        throw error;
    }
}

exports.roleCreate = async (req, res) => {
    try {
        const data = await roleModel.create({
            role_name: req.body.role_name
        });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}

exports.roleUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await roleModel.updateOne({ _id: id }, {
            role_name: req.body.role_name,
        });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}

exports.roleDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await roleModel.deleteOne({ _id: id });
        res.redirect("back");
    } catch (error) {
        throw error;
    }
}