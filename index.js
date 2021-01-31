const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

//connect to mongoDB
mongoose.connect("mongodb+srv://user:<user123>@cluster0.usk10.mongodb.net/<student>?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.port || 3000,()=>{
            console.log("server started!!!...");
        })
    }
);
