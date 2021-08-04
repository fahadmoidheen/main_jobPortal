import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user={
    email:'',
    password:''
    }
  

  loginUser(user:any)
  {
    console.log(user);
    return this.http.post<any>("http://localhost:3000/alumni/login",user)
   
  }
  constructor(private http: HttpClient) { }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
}
