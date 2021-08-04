const express = require('express');
const alumni =express.Router();
const alumnidata = require('../model/alumnidata');


alumni.post("/login",async (req,res)=>{
    
    const emailalumni = req.body.email;
    console.log(emailalumni)
    const password = req.body.password;
    console.log(password)
    const udata = await alumnidata.findOne({ email: emailalumni})
     console.log(udata);
    

    if (udata == null) {
            return res.status(404).send("userdata not present");
        }
     if (udata.email === emailalumni && udata.password === password) {

        res.status(200).send({ emailalumni });
    }
    else {
        res.status(405).send("something Went Wrong Try Again");
    }

})


alumni.post('/signup', async  (req, res)=> {
    

    const user = req.body;
     console.log(user);

        const newUser = new alumnidata(user);
        try{
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error){
            res.status(409).json( error);     
        }

       
});


alumni.get('/:id',  async(req, res) => {

    const id = req.params.id;
     await alumnidata.findOne({"email":id})
      .then((alumni)=>{
          res.send(alumni);
      });
 })

 alumni.get('/update/:id',  async(req, res) => {

    const id = req.params.id;
     await alumnidata.findOne({"_id":id})
      .then((alumni)=>{
          res.send(alumni);
      });
 })

alumni.put('/update',async (req,res)=>{
    let user = await alumnidata.findById(req.body._id);
    
        user1 = req.body;
    
        console.log(user);
        const editUser = new alumnidata(user1);
    
        try{
            await alumnidata.updateOne({"_id": req.body._id}, editUser);
            res.status(201).json(editUser);
        } catch (error){
            res.status(409).json({ message: error.message});     
        }
    
})

alumni.get('/all',async (req,res)=>{

    alumnidata.find()
            .then(function (alumni) {
                res.send(alumni);
            });

})



module.exports=alumni;
