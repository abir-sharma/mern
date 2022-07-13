const mongoose = require("mongoose");
const bcrypt=require("bcryptjs")
const validator=require("validator")
const jwt=require("jsonwebtoken")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate:[validator.isEmail,"Please enter a valid email"]
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
UserSchema.pre("save",async function(next){
  if (!this.isModified("password")){
    next()
  }
  this.password=await bcrypt.hash(this.password,10)
})
UserSchema.methods.getJWTToken=function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE
  })
}
UserSchema.methods.comparePassword=async function(enterPassword){
  return await bcrypt.compare(enterPassword,this.password)
}
module.exports = mongoose.model("User", UserSchema);