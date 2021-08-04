import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {


  facultydata = [{
    uname: '',
    Uemail: '',
    hq: '',
    phoneno: '',
    experience:'',
    skill:'',
    status: '',
    _id:''
  }]

  data1=localStorage.getItem("jobId");
  
  constructor(private _jobs:JobService) { }

  ngOnInit(): void {
   
    
    this._jobs.applicantdata(this.data1).subscribe((data)=>{
      this.facultydata=JSON.parse(JSON.stringify(data))
    
  }
    )
  }


save(data:any){
  
  this._jobs.verifyalumni(data);   
  Swal.fire("Success");
    
   this.ngOnInit;
}

applicantdelete(delalumni:any){
  console.log(delalumni)
  this._jobs.deleteapplicant(delalumni)
  Swal.fire("success");
}
}
