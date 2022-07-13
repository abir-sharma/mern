const catchAsyncError=require("../middleware/catchAsyncErrors")
const User=require("../models/User")
const ErrorHandler = require("../utils/errorHandler")
const sendToken=require("../utils/jwtToken")

exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {username,email,password,profilePic}=req.body
    const user=await User.create({
        username,email,password,profilePic
    })
    sendToken(user,201,res)
})

exports.updateUser=catchAsyncError(async(req,res,next)=>{
    let user=await User.findById(req.user.id)
    const newUserData = {
        username: req.body.username,
        email: req.body.email,
      };
    if (!user){
        return next(new ErrorHandler("User not found",404))
    }
    user=await User.findByIdAndUpdate(req.user.id,newUserData,{new:true,runValidators:true,useFindAndModify:false})
    res.status(200).json({
        success:true,
        user
    })
})

exports.deleteUser=catchAsyncError(async(req,res,next)=>{
    let user=await User.findById(req.user.id)
    if (!user){
        return next(new ErrorHandler("User not found",404))
    }
    await user.remove()
    res.status(200).json({
        success:true,
        message:"User deleted succesfully"
    })
})

exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {username,password}=req.body
    if(!username||!password){
        return next(new ErrorHandler("Please enter username and password",400))
    }
    const user=await User.findOne({username}).select("password")
    if(!user){
        return next(new ErrorHandler("Invalid username or password",401))
    }
    const isPasswordMatched=await user.comparePassword(password)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid username or password",401))
    }
    sendToken(user,200,res)
})

exports.logout=catchAsyncError(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
})

exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);
  
    res.status(200).json({
      success: true,
      user,
    });
  });

  exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");
  
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Old password is incorrect", 400));
    }
  
    if (req.body.newPassword !== req.body.confirmPassword) {
      return next(new ErrorHandler("password does not match", 400));
    }
  
    user.password = req.body.newPassword;
  
    await user.save();
  
    sendToken(user, 200, res);
  });