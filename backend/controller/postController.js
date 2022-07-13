const Post=require("../models/Post")
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")
const ApiFeatures = require("../utils/apiFeatures")

exports.createPost=catchAsyncErrors(async(req,res,next)=>{
    const post=await Post.create(req.body)
    res.status(201).json({
        success:true,
        post
    })
})

exports.getAllPosts=catchAsyncErrors(async(req,res,next)=>{
    const resultPerPage=6
    const postCount=await Post.countDocuments()
    const apiFeature= new ApiFeatures(Post.find(),req.query).search().filter().pagination(resultPerPage)
    const posts=await apiFeature.query
    res.status(201).json({
        success:true,
        posts
    })
})

exports.updatePost=catchAsyncErrors(async(req,res,next)=>{
    let post=await Post.findById(req.params.id)
    if (!post){
        return next(new ErrorHandler("Product not found",404))
    }
    post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})
    res.status(200).json({
        success:true,
        post
    })
})

exports.deletePost=catchAsyncErrors(async(req,res,next)=>{
    const post=await Post.findById(req.params.id)
    if (!post){
        return next(new ErrorHandler("Product not found",404))
    }
    await post.remove()
    res.status(200).json({
        success:true,
        message:"Post deleted succesfully"
    })
})

exports.getPostDetails=catchAsyncErrors(async(req,res,next)=>{
    const postCount=await Post.countDocuments()
    const post=await Post.findById(req.params.id)
    if (!post){
        return next(new ErrorHandler("Product not found",404))
    }
    res.status(200).json({
        success:true,
        post,
        postCount
    })
})