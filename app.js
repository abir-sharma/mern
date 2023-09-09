const express=require("express")
const cors=require("cors")
const app=express()
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const path=require('path')
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
const errorMiddleware=require('./backend/middleware/error')

if (process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"config/config.env"})
}

const post=require("./backend/routes/postRoute")
const user=require("./backend/routes/userRoute")
const login=require("./backend/routes/userRoute")
const logout=require("./backend/routes/userRoute")
app.use("/api/v1",post)
app.use("/api/v1",user)
app.use("/api/v1",login)
app.use("/api/v1",logout)

// app.use(express.static(path.join(__dirname,"../frontendd/build")))
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../frontendd/build/index.html"))
// })

app.use(errorMiddleware)


module.exports=app