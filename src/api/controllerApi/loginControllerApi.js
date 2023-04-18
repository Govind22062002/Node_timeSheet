const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { registerModel } = require("../../models")

exports.loginPostApi = async (req,res,next) => {
   let { email, password } = req.body;
 
   let existingUser;
   try {
     existingUser = await registerModel.findOne({ email: email });
   } catch {
     const error = new Error("Error! Something went wrong.");
     return next(error);
   }
   if (!existingUser) {
     const error = Error("Wrong details please check at once");
     return next(error);
   }
   let token;
   try {
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if(isMatch){
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        "secretkeyappearshere",
        // { expiresIn: "1h" }
      );
    }else{
      const error = Error("Wrong details please check at once");
      return next(error);
    }
   } catch (err) {
     const error = new Error("Error! Something went wrong.");
     return next(error);
   }
  
   res
     .status(200)
     .json({
       success: true,
       data: {
         userId: existingUser.id,
         email: existingUser.email,
         password : existingUser.password,
         token: token,
       },
     });
    
}

exports.registerPostApi = async (req,res) => {
    try {
        const { name, email, password } = req.body
        const user = await registerModel.findOne({ email })
        if (user) {
            res
            .status(400)
            .json({
              success: false,
              message: "email Id is Allready exist "
            });
        } else {
            const hashed = await bcrypt.hash(password, 10)
            const data = await registerModel.create({
                name,
                email,
                password: hashed
            })
            res
            .status(200)
            .json({
              success: true,
               data
            });   
            
        }
    } catch (error) {
      res
      .status(400)
      .json({
        success: false,
         message : error
      });   
      
    }

}