import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  hide=true;
  constructor(private admin:AdminService,private routes:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  signupForm = this.fb.group({
    uname:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    hq:['',Validators.required],
    phoneno:['',[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
    skill:['',Validators.required],
    experience:['',Validators.required],

  })  
  get signupFormControl() {
    return this.signupForm.controls;
  }


  signupUser() {
     
    this.admin.addfacultydata(this.signupForm.value).subscribe(
      res =>{
        
        Swal.fire("User sucessfully added");
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
