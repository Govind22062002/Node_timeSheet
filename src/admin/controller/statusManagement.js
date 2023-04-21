exports.statusManagement = async (req, res) => {
   try {
    const user = req.session.username;
    if(user) res.render("statusManagement",{user} );   
       else res.redirect("back") ;
   } catch (error) {
    throw error;
   }
}
