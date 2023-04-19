
exports.clientAssign = async (req, res) => {
    try {
        res.render("client_Assign");
    } catch (error) {
        throw error;
    }
}