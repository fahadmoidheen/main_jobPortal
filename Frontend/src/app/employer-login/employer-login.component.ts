import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { EmployerdataService } from '../employerdata-service.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {
  emp={
    email:"",
    password:"",
    
  }

  
  constructor(private router:Router,private employerservice:EmployerdataService) { }
    
  ngOnInit(): void { 
    
  }

  

  
  loginEmp(){
    this.employerservice.loginEmployer(this.emp)

    .subscribe(
      res=>{

        console.log(res)
        Swal.fire("Succesfully logged in")
          .then(()=>{
      this.router.navigate(["employerHome"])})
      },
      err=>{
        console.log(err)
        if(err.status===409){
          Swal.fire ("Incorrect credentials")
        }else{
          Swal.fire("Invalid Email or Password")
        }
      }
      )
      localStorage.setItem("employeremail",this.emp.email)
  }
}    


