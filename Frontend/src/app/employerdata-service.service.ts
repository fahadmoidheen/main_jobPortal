import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerdataService {

  item={
    name:"",
    email:"",
    phone:"",
    company:"",
    password:"",
    conpassword:"",
    compdesc:""
  }
  emp={
    email:"",
    password:""
  }

  constructor(private http:HttpClient) { }

  postEmployerdata(item:any){
    return this.http.post<any>('http://localhost:3000/postEmployer',item)
    .subscribe(data=>{console.log(data)})
  }
  
  loginEmployer(emp:any){
    return this.http.post<any>('http://localhost:3000/loginemployer',emp)
  }

  getEmployer(id:any){
    return this.http.get('http://localhost:3000/getEmployer/'+id)
  }
  getAllEmployers(){
    return this.http.get('http://localhost:3000/getAllEmployer')
  }
}
