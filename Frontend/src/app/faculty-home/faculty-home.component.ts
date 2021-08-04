import { Component, OnInit } from '@angular/core';


import { AdminService } from '../services/admin.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faculty-home',
  templateUrl: './faculty-home.component.html',
  styleUrls: ['./faculty-home.component.css'],
  

})
export class FacultyHomeComponent implements OnInit {
  

  hide=true;

  facultydata = [{
    uname: '',
    email: '',
    hq: '',
    phoneno: '',
    experience:'',
    skill:'',
    
  }]

  constructor(private admin:AdminService,private routes:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.admin.getfaculty().subscribe((data)=>{
      this.facultydata=JSON.parse(JSON.stringify(data))
      
   })
  }
  
  editfaculty(faculty:any)
  {
    localStorage.setItem("editfacultyId", faculty._id.toString());
    this.routes.navigate(['/admin/editfaculty']);

  }

  deletefaculty(faculty:any)
  {
    this.admin.deletefaculty(faculty._id)
      .subscribe((data:any) => {
        
        this.facultydata = this.facultydata.filter(p => p !== faculty);
        
   })
   alert("success")
   this.routes.navigate(['/admin/home']);
  

   

}


  

  



}
