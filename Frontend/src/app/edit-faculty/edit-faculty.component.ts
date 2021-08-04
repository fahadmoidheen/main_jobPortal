import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.css']
})
export class EditFacultyComponent implements OnInit {
   hide=true


  facultydata = {
    uname: '',
    email: '',
    hq: '',
    phoneno: '',
    experience:'',
    skill:'',
    password:''
    
  }

  constructor(private router:Router,private _admin:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    let facultyId = localStorage.getItem("editfacultyId");
    
    this._admin.getfacultydata(facultyId).subscribe((data)=>{
    this.facultydata=JSON.parse(JSON.stringify(data));
    console.log(this.facultydata)
  })

  }


  signupForm = this.fb.group({
    uname:['',[Validators.required,,Validators.pattern(/^([a-z0-9]|[-._](?![-._])){5,20}$/)]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    hq:['',Validators.required],
    phoneno:['',[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
    skill:['',Validators.required],
    experience:['',Validators.required],
    


  })  
  

  editfaculty(){
    console.log(this.facultydata)
    this._admin.editfaculty(this.facultydata);   
      alert("Success");
      this.router.navigate(['admin/home']);
  
}




  

  






}
