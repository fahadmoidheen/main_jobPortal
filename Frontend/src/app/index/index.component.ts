import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
      cname:''
  }
]
  constructor(private _job:JobService) { }

  ngOnInit(): void {
    // this._job.getjobs().subscribe((data)=>{
    //   this.jobs=JSON.parse(JSON.stringify(data))
      
  //  })
  }

  isDisabled(lastdate:string):boolean{
    let currentDate=new Date()

    if(currentDate>new Date(lastdate)){
      return true
    }
    else{
      return false
    }
  }

}
