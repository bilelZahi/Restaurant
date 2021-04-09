import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  baseURL = environment.baseURL


  constructor( public http : HttpClient) { }
  // mail(data){

  //   return this.http.post( this.baseURL + '/mail/sendMail',data)

  // }
}
