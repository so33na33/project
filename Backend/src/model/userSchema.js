const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/ProjectDB?retryWrites=true&w=majority")
const userSchema = new schema({
    userId : {type: Number},
    userName : {type: String,required:true},
    email :{type:String,required:true},
    phoneNo :{type: Number,required:true},
    password : {type: String,required:true},
    confirmPassword:{type:String,required:true}
})
var register = Mongoose.model("userRegister",userSchema);
module.exports = {register}