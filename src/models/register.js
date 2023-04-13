const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const registerSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    tokens:[{
        tokenobj:{
            type:"string",
            required:true
        }
   }]
}, {
    timestamps: true,
    versionKey: false
});
registerSchema.methods.generateAuthToken=async function(){
    try{
        const token=jwt.sign({_id:this._id.toString(),email:this.email.toString()},"ey57u6i765i656y54t54u75et534675i7u")
        this.tokens=this.tokens.concat({tokenobj:token})
        await this.save()
        return token
    }catch(e){
        console.log(e)
    }
}
module.exports = mongoose.model('register', registerSchema);




