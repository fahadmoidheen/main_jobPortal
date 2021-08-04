import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent implements OnInit {
  jobs=[
    {
      jobrole:'',
      email:'',
      jobdesc:'',
      hq:'',
      lastdate:'',
      skill:'',
      experience:'',
      jobtype:'',
      cname:'',
      _id:''
  }
]

data=localStorage.getItem("employeremail");
  constructor(private _job:JobService,private routes:Router ) { }

  ngOnInit(): void {
    // this.jobpostservice.getJobs().subscribe((data)=>{
    //   this.jobs=JSON.parse(JSON.stringify(data));
      
      
    // })
    this._job.getempjob(this.data).subscribe((data)=>{
      this.jobs=JSON.parse(JSON.stringify(data))
      console.log(data)
   })
   
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
  this.ngOnInit();

}


}
