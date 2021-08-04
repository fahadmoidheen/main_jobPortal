import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  hide=true;
    
  
  constructor(private fb:FormBuilder,
    private auth: AdminService,
    private routes:Router) { }
    
    loginForm = this.fb.group({
    
      

      email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
      
      
      })

    // signupForm = this.fb.group({
    //   uname:['',[Validators.required,,Validators.pattern(/^([a-z0-9]|[-._](?![-._])){5,20}$/)]],
    //   email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    //   password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    //   hq:['',Validators.required],
    //   phoneno:['',[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
    //   skill:['',Validators.required],
    //   experience:['',Validators.required],
      


    // })  
  

  ngOnInit(): void {
  }
   

  get loginFormControl() {
      
    return this.loginForm.controls;
  }  

  // get signupFormControl() {
  //   return this.signupForm.controls;
  // }
  

loginUser () {
    
  
  console.log(this.loginForm.value);
  this.auth.logindata(this.loginForm.value).subscribe(
    res =>{
      console.log("hai");
      console.log(res)
      Swal.fire("welcome admin");
      this.routes.navigate(["/admin/home"]);
      
    },
    err =>{
       if(err.status === 409){
        Swal.fire("Incorrect credentials");
       }else{
        Swal.fire("somthing went wrong");
         
         console.log(err);
       }
    }
    
  )
 

  
}


// signupUser() {
     
//   this.auth.signupdata(this.signupForm.value).subscribe(
//     res =>{
//       console.log(res)
//       alert("User sucessfully added");
//       this.routes.navigate(["/admin"]); 
      
//     },
//     err =>{
//        if(err.error.code === 11000){
//          alert("email already in use");
//        }else{
//          alert("somting Went Worng");
         
//          console.log(err);
         
//        }

//     }
    
//   )
  
// }


}
