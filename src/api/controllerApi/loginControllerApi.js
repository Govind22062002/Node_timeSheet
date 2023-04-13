const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { registerModel } = require("../../models")

exports.loginPostApi = async (req,res,next) => {
   console.log(req.body);
   let { email, password } = req.body;
 
   let existingUser;
   try {
     existingUser = await registerModel.findOne({ email: email });
     console.log(existingUser ,"existingUser");
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
    console.log(isMatch ,"match");
    if(isMatch){
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );
    }else{
      const error = Error("Wrong details please check at once");
      return next(error);
    }
   } catch (err) {
     console.log(err);
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
        console.log(req.body, "body");
        const { name, email, password } = req.body
        const user = await registerModel.findOne({ email })
        console.log(user ,"user post");
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
        console.log(error);
    }

}