import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniService } from '../alumni.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-alumni',
  templateUrl: './update-alumni.component.html',
  styleUrls: ['./update-alumni.component.css']
})
export class UpdateAlumniComponent implements OnInit {

  alumnidataa =

    {
      uname: '',
      email: '',
      password: '',
      hq: '',
      city: ''
    }


    constructor(private alumniservice: AlumniService, private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem("getalumniid");
    this.alumniservice.getalumni(id).subscribe((data) => {
      this.alumnidataa = JSON.parse(JSON.stringify(data));
      console.log(this.alumnidataa)
    })
  }

  updatealumni()
  {
    this.alumniservice.editalumni(this.alumnidataa);   
    alert("Success");
    this.router.navigate(['alumni/home']);
  
  }

  





}
