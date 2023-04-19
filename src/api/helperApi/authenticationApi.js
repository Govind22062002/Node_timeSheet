const jwt = require("jsonwebtoken")

exports.isAuthApi = async (req, res,next) => {
    const token = req.headers?.authorization?.split(' ')[1];
    //Authorization: 'Bearer TOKEN'
    console.log(token ,"token ");
    if (!token) {
        res.status(400).json({
            success: false, message: "Error! Token was not provided."});
    }
    //Decoding the token
    try {
       if(token){
        const decodedToken = jwt.verify(token, "secretkeyappearshere");
        // console.log(decodedToken ,"decodeToken");
        if(decodedToken){
            return next();
        }else{
            res
            .status(400)
            .json({
                success : false ,
                message : "jwt token is expired"
            });
        }
       }
    } catch (error) {
        res
        .status(400)
        .json({
            success : false ,
            message : error
        });
    }
   
    }