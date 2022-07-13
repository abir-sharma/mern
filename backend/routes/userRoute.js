const express=require("express")
const {registerUser,loginUser,logout, updateUser, deleteUser,getUserDetails,updatePassword}=require("../controller/userController")
const { isAuthenticatedUser } = require("../middleware/auth")
const router=express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout)
router.route("/me").put(isAuthenticatedUser,updateUser).delete(isAuthenticatedUser,deleteUser).get(isAuthenticatedUser ,getUserDetails)
router.route("/password/reset").put(isAuthenticatedUser,updatePassword)
module.exports=router