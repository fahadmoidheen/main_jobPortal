import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})



export class AlljobsComponent implements  OnInit  {

jobs=[{  jobrole:'',
    email:'',
    jobdesc:'',
    hq:'',
    lastdate:'',
    skill:'',
    experience:'',
    jobtype:'',
    cname:'',
    _id:''
}]


  constructor(private _job:JobService,private routes:Router) { }

  ngOnInit(): void {
    this._job.getjobs().subscribe((data)=>{
      this.jobs=JSON.parse(JSON.stringify(data))
      
   })

   

  }
   

  apply(data:any){
    localStorage.setItem("jobId", data._id.toString());
    localStorage.setItem("jobemail", data.email.toString());
    localStorage.setItem("jobdate",data.lastdate.toString());
    localStorage.setItem('jobcompany',data.cname.toString());
    localStorage.setItem("jobrole",data.jobrole.toString())
     localStorage.setItem("jobdescription",data.jobdesc.toString())
     localStorage.setItem('jobtype',data.jobtype.toString())
    this.routes.navigate(['applyjob']);
  }
  view(data:any){
    localStorage.setItem("jobId", data._id.toString());
     this.routes.navigate(['/applicant'])
   }
  
  
   delete(data:any){
          this._job.deletejobpost(data)
          .subscribe((data:any) => {
            
            this.jobs = this.jobs.filter(p => p !== data);
            
        })
        alert("success")
        this.ngOnInit;
  
   }

}
