import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';
import { EmployerdataService } from '../employerdata-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  facultydata = [{
    uname: '',
    email: '',
    hq: '',
    phoneno: '',
    experience:'',
    skill:'',
    status: '',
  }];

  employers=[
    {
    name:'',
    email:'',
    phone:'',
    company:''
  }
]

  constructor(private alumni:AlumniService,private Employer:EmployerdataService) { }

  ngOnInit(): void {
    this.alumni.getallalumnidetails().subscribe((data)=>{
      this.facultydata=JSON.parse(JSON.stringify(data))

  }
    )
    this.Employer.getAllEmployers().subscribe((data)=>{
      this.employers=JSON.parse(JSON.stringify(data))
    })
}






save(alumni:any) {
     
  console.log(alumni)
  this.alumni.savealumni(alumni);   
    alert("Success");
    this.ngOnInit();
    
  
}








}
