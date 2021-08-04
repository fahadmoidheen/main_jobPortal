const express = require('express');
const job =express.Router();
const ApplyJobdata=require('../model/ApplyJobData')
const jobdata = require('../model/jobdata');


job.get("/all", async (req,res)=>{

  
    jobdata.find()
    .then(function(datas){
        res.send(datas);
    
    })

})

job.post("/applyjob",async(req,res)=>{
    const user = req.body;
    
    
    const newUser = new ApplyJobdata(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
})

job.post("/loggedin",async (req,res)=>{
    const user = req.body.email;
    ApplyJobdata.find({Uemail:user})
    .then(function(datas){
        res.send(datas);
    
    })
})




module.exports=job;