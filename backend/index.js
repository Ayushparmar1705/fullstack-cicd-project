const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express());
app.use(cors());

app.get("/",()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("MongoDB connected"));


    app.get("/api",(req, res)=>{
        res.json({
            message: "Backend running succesfully"
        })
    })
})


app.listen(5000, ()=>{
    console.log("Backend running succesfully");
})