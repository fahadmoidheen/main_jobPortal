import { Component, OnInit } from '@angular/core';
import { EmployerdataService } from '../employerdata-service.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {
  employerProfile={
    name:"",
    email:'',
    phone:'',
    company:''
  }
  constructor( private employerservice:EmployerdataService ) { }

  ngOnInit(): void {
    let email=localStorage.getItem("email")
    console.log(email,"new")
    this.employerservice.getEmployer(email)
    .subscribe((data)=>{
      this.employerProfile=JSON.parse(JSON.stringify(data))
    })
  }

}
