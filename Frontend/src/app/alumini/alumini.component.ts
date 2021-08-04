
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AlumniService } from '../alumni.service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.css']
})
export class AluminiComponent implements OnInit {

  hide = true;





  constructor(private fb: FormBuilder,
    // private auth: AuthService,
    private routes: Router,
    private alumni: AlumniService,
    private _auth: AuthService,
    private _router: Router) { }

  alumnidetails = {
    uname: '',
    email: '',
    password: '',
    hq: '',
    city: ''
  }

  
  loginForm = this.fb.group({



    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],


  })

  signupForm = this.fb.group({
    uname: ['', [Validators.required,]],
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    hq: ['', Validators.required],
    city: ['', Validators.required]
  })





  get loginFormControl() {

    return this.loginForm.controls;
  }

  get signupFormControl() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    
  }

  user = {
    email: '',
    password: ''
  }

  loginUser() {


    this._auth.loginUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('alumniId',this.user.email)
          
          this._router.navigate(['alumni/home'])
        },
        err => {
          console.log(err);

          Swal.fire("User Not Signed IN ");
        }
      )
  }







signupUser() {
  console.log(this.signupForm.value);
  this.alumni.addalumni(this.signupForm.value).subscribe(
    res =>{
      
      Swal.fire("User sucessfully added");
      console.log(res);
      
    },
    err =>{
       if(err.error.code === 11000){
        Swal.fire("email already in use");
       }else{
        Swal.fire("somting Went Worng");
         
         
       }

    }
    
  )



  
  this.routes.navigate(["/alumni"])
}

  }
