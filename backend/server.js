import express from "express"
import cors from "cors"
import parking_lots from "./api/route.controller.js"


const app=express()
//app.use(middleware)
//cors used for https
app.use(cors())

app.use(express.json())





//site to look for
app.use("/api/v1/parking_lots",parking_lots)
//load error if any other site is looked
app.use("*",(req,res)=>res.status(404).json({error:"Page Not Found"}))

export default app