import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {


  
  constructor(private job:JobService,private routes:Router,private fb:FormBuilder) { }
  
  
  ngOnInit(): void {
  }



  
  jobForm = this.fb.group({

    jobrole:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    jobdesc:['',Validators.required],
    hq:['',Validators.required],
    lastdate:['',Validators.required],
    skill:['',Validators.required],
    experience:['',Validators.required],
    jobtype:['',Validators.required],
    cname:['',Validators.required]
    
  })  




  get signupFormControl() {
    return this.jobForm.controls;
  }

  jobPostForm(){
    this.job.postjob(this.jobForm.value).subscribe(
      res =>{
        
        Swal.fire("Job details added");
        this.ngOnInit();
        
      },
      err =>{
         if(err.error.code === 11000){
          Swal.fire("email already in use");
         }else{
          Swal.fire("somting Went Worng");
           
           console.log(err);
           
         }
  
      }
      
    )
  }
}
