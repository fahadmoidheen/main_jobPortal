const express = require('express');

const cors = require('cors');

const Facultydata = require('./model/facultydata');
const alumnidata = require('./model/alumnidata');
const ApplyJobdata=require('./model/ApplyJobData')

require("./db/connect")
const app = new express();
const jwt = require('jsonwebtoken');
const Jobdata = require('./model/jobdata');
const employerdata=require ('./model/employerData')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const alumnirouter =require("./routers/alumniRouter");
const jobrouter =require("./routers/jobRouter");

app.use("/alumni",alumnirouter);

app.use("/jobs",jobrouter);

admin = "admin@gmail.com";
adminPwd = "Aa@123456"

// -------------------------------SECTION FACULTY STARTS------------------------------------
app.get("/allfaculty",async(req,res)=>{

    
    Facultydata.find()
    .then(function(products){
        res.send(products);
    
    });
})


app.get("/faculty/:id",async(req,res)=>{

const id = req.params.id;
await Facultydata.findOne({"_id":id})
.then((book)=>{
    
    res.send(book);
});
}) 

// Faculty login

app.post("/faculty/login", async(req,res)=>{

const userrole= 0;
const email = req.body.email;
const password = req.body.password;
const udata = await Facultydata.findOne({email: email})



 if(email===admin && password===adminPwd){
  
  return  res.status(200).send({email});
}else if(udata==null){
    return res.status(404).send("userdata not present");
  }else
  if(udata.email===email && udata.password===password){
  
   res.status(200).send({email});
}
else{
  res.status(405).send("something Went Wrong Try Again");
}
})

// Adding new faculty by admin

app.post("/faculty/add",async(req,res)=>{


const user = req.body;


const newUser = new Facultydata(user);
try{
    await newUser.save();
    res.status(201).json(newUser);
} catch (error){
    res.status(409).json({ message: error.message});     
}

})

// Faculty details updating

app.put("/faculty/update",async(req,res)=>{

let user = await Facultydata.findById(req.body._id);
user = req.body;

const editUser = new Facultydata(user);

try{
    await Facultydata.updateOne({_id: req.body._id}, editUser);
    res.status(201).json(editUser);
} catch (error){
    res.status(409).json({ message: error.message});     
}
})

// deleting faculty details

app.delete('/facultyremove/:id',(req,res)=>{

id = req.params.id;
Facultydata.findByIdAndDelete({"_id":id})
.then(()=>{
    console.log('success')
    res.send();
})
})
// -------------------------------SECTION FACULTY ENDS------------------------------------


//for alumni



app.post('/insert', function (req, res) {

    

    var alumni = {
        uname: req.body.alumni.uname,
        email: req.body.alumni.email,
        password: req.body.alumni.password,
        hq: req.body.alumni.hq,
        city: req.body.alumni.city,


    }
    var alumni = new alumnidata(alumni);
    alumni.save();
});




//alumni login
// app.post('/login', async(req, res) => {
//     const userrole = 0;
//     const email = req.body.email;
//     const password = req.body.password;
//     const udata = await alumnidata.findOne({ email: email })


//     if (udata == null) {
//         return res.status(404).send("userdata not present");
//     }

//  if(udata.email === email && udata.password === password) {

//     let payload = { subject: email + password }
//     let token = jwt.sign(payload, 'secretKey')
//     res.status(200).send({ token })
// }
// else {
//     res.status(405).send("something Went Wrong Try Again");
// }
        
// })

// app.get('/alumni', function (req, res) {

//     alumnidata.find()
//         .then(function (alumni) {
//             res.send(alumni);
//         });
// });


// app.post("/alumni/login", async (req, res) => {



//     const userrole = 0;
//     const email = req.body.email;
//     const password = req.body.password;
//     const udata = await alumnidata.findOne({ email: email })

    

//     if (email === admin && password === adminPwd) {

//         return res.status(200).send({ email });
//     } if (udata.email === email && udata.password === password) {

//         res.status(200).send({ email });
//     }
//     else {
//         res.status(405).send("something Went Wrong Try Again");
//     }





// })



// ------Alumni Verification




// app.put("/alumni/save",async(req,res)=>{
    
//     let user = await alumnidata.findById(req.body._id);
    
//     user1 = req.body;

    
//     const editUser = new alumnidata(user1);

//     try{
//         await alumnidata.updateOne({"_id": req.body._id}, editUser);
//         res.status(201).json(editUser);
//     } catch (error){
//         res.status(409).json({ message: error.message});     
//     }
//     })

//-----Almni Verifcation  ends




// ------------JOB SECTION STARTS------------------- 


app.post('/postjob',async(req,res)=>{

    

const user = req.body;


const newUser = new Jobdata(user);
try{
    await newUser.save();
    res.status(201).json(newUser);
} catch (error){
    res.status(409).json({ message: error.message});     
}

})


// app.get("/getjobs",async(req,res)=>{
    

    
//         Jobdata.find()
//         .then(function(products){
//             res.send(products);
        
//         });
    
// })


app.post("/applyjob",async(req,res)=>{
    

    


    const user = req.body;
    
    
    const newUser = new Jobdata(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

})

app.delete('/deletejobpost/:id',(req,res)=>{

    id = req.params.id;
Jobdata.findByIdAndDelete({"_id":id})
.then(()=>{
    console.log('success')
    
})


ApplyJobdata.findByIdAndDelete({"job_id":id})
.then(()=>{
    console.log('success')
    res.send();
})

})


app.post("/appverify/",async(req,res)=>{
  
    console.log(req.body);

    
     let user = await ApplyJobdata.findById(req.body._id);
    alumni = req.body;
     
    const editUser = new ApplyJobdata(alumni);
    
     try{
        await ApplyJobdata.updateOne({_id: req.body._id},editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

})


app.get("/applicant/:id",async(req,res)=>{



const user = req.params.id;


ApplyJobdata.find({job_id:user})
.then(function (alumni) {


res.send(alumni);
});


})

// emplyerspecific jobs details

app.get("/getempjobs/:id",(req,res)=>{
    const empemail =req.params.id
    
    Jobdata.find({email:empemail}).then((data)=>{
        res.send(data)
    })
    
});


// ------------JOB SECTION Ends------------------- 

//---------Employer section Starts------------------
//Posting Employer details into database
app.post("/postEmployer",function(req,res){
    console.log(req.body);
    var item={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company,
        password:req.body.password,
        compdesc:req.body.compdesc
    }
    var employer= new employerdata(item);
    employer.save();;
    
})

//log in of employer

app.post("/loginemployer",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password 
    console.log(email);
    console.log(password);
    let udata= await employerdata.findOne({email:email})

    if(udata==null){
        console.log("null")
        return res.status(404).send("userdata does not present") 
    }else if(udata.email===email && udata.password===password){
        
          res.status(200).send({email})
    }else{
        
        return res.status(401).send("Something went wrong..Try again")
    }
})

app.get("/getEmployer/:id",async(req,res)=>{
    const email=req.params.id;
    console.log(email)
    employerdata.findOne({"email":email})
    .then((singleEmployer)=>{
        res.send(singleEmployer)
    })
})

//-------- getting employer details at admin terminal
app.get("/getAllEmployer",async(req,res)=>{
    employerdata.find()
    .then(function(employers){
        res.send(employers)
    })
})
//---------Employer section Ends------------------


app.listen(3000, function () {
    console.log('listening to port 3000');
});