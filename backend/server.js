const app=require("./app")
const connectDatabase=require("./config/database")
const path=require('path')
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    server.close(()=>{
        process.exit(1)
    })
})
if (process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"backend/config/config.env"})
}
connectDatabase()


const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working at : http://localhost:${process.env.PORT}`)
})

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting down the server due to unhandled promise rejection`)
    server.close(()=>{
        process.exit(1)
    })
})