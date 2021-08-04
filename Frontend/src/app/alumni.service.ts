import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  item = {
    uname: '',
    email: '',
    password: '',
    hq: '',
    city: ''

  }

  constructor(private http: HttpClient) { }
  addalumni(item: any) {
    console.log(item);
    return this.http.post<any>("http://localhost:3000/alumni/signup",item)
      
  }

  getalumni(id:any){
    return this.http.get("http://localhost:3000/alumni/update/"+id);
  }
//all alumnissss
  getallalumnidetails(){
    return this.http.get("http://localhost:3000/alumni/all");
  }

savealumni(item:any){
  console.log(item)
  return this.http.put("http://localhost:3000/alumni/save",item)
  .subscribe(data =>{console.log(data)})
}

getalumnidetail(email:any){
  return this.http.get("http://localhost:3000/alumni/"+email)

}


editalumni(alumnidata:any){
  
  return this.http.put("http://localhost:3000/alumni/update",alumnidata)
  .subscribe(data =>{console.log("success")})
}

}
