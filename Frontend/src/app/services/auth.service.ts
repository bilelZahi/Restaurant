import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(false);

  baseURL = environment.baseURL


  constructor(public http:HttpClient) { }

  register(data){

    return this.http.post( this.baseURL + '/user/register',data)
  }
  mail(body){
    
    return this.http.post( this.baseURL + '/mail/sendMail',body)

  }
  login(data)
  {
     return this.http.post(this.baseURL + '/user/login', data)
  }
  public getToken(): string {
    return JSON.parse(localStorage.getItem('token'))
  }
  signInSubject(){
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true); 
    
   }
 
}

