import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  logindata(user:any){
    
    return this.http.post<any>("http://localhost:3000/faculty/login",user)
  }

  addfacultydata(user:any){
    return this.http.post<any>("http://localhost:3000/faculty/add",user)

  }

  getfacultydata(id:any){
    return this.http.get("http://localhost:3000/faculty/"+id)

  }

  
 getfaculty(){
  
 return this.http.get("http://localhost:3000/allfaculty");

}

editfaculty(faculty:any){
  console.log('client update')
    return this.http.put("http://localhost:3000/faculty/update",faculty)
    .subscribe(data =>{console.log(data)})
}



deletefaculty(id:any)
{
    console.log("hai")
  return this.http.delete("http://localhost:3000/facultyremove/"+id)

}

  
  
  
}
