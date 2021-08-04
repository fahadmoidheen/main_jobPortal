import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniService } from '../alumni.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-alumni-home',
  templateUrl: './alumni-home.component.html',
  styleUrls: ['./alumni-home.component.css']
})
export class AlumniHomeComponent implements OnInit {


  alumnidata ={
      uname: '',
      email: '',
      password: '',
      hq: '',
      city: ''
    }

jobs=[{  jobrole:'',
    email:'',
    jobdesc:'',
    hq:'',
    lastdate:'',
    skill:'',
    experience:'',
    jobtype:'',
    cname:'',
    _id:''
}]

  constructor(private alumniservice:AlumniService,private router:Router,private _job:JobService) { }

  ngOnInit(): void {
    let passdata = localStorage.getItem("alumniId") 
    this.alumniservice.getalumnidetail(passdata).subscribe((data) => {
      this.alumnidata = JSON.parse(JSON.stringify(data));
      
    })
    
    this._job.loggedinuserjobdetails(passdata).subscribe((data1)=>{
      this.jobs =JSON.parse(JSON.stringify(data1))
      console.log(this.jobs);
    })

  }




  updatealumni(alumdata:any)
  {
    this.alumniservice.editalumni(alumdata);   
    alert("Success");
    this.router.navigate(['alumni/update']);
  
  }
}


