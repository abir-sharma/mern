const express=require("express")
const {getAllPosts,getPostDetails,createPost,deletePost,updatePost} =require("../controller/postController")
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth")
const router=express.Router()

router.route("/posts").get(getAllPosts)
router.route("/post/new").post(createPost)
router.route("/post/:id").put(updatePost).delete(deletePost).get(getPostDetails)
module.exports=router