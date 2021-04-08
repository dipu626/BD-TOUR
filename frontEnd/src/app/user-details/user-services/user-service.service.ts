import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../user-model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private ROOT_URL = "http://localhost:3000/api/user";

  constructor(private http: HttpClient) { }

  onClick(event) {
    alert(event.target.innerText + "works");
  }

  getUserList(): Observable <UserInterface[]> {
    return this.http.get<UserInterface[]>(this.ROOT_URL + "/view-user-list");
  }

  registerUser(userDetails: UserInterface) {
    //const headers = { 'content-type': 'application/json'};
    //const body = JSON.stringify(userDetails);
    //return this.http.post<any>(this.ROOT_URL + "/register", body, { 'headers': headers, observe: 'response' });
    return this.http.post<any>(this.ROOT_URL + "/register", userDetails);
 }

 loginUser(userEmailPassword) {
   // console.log("FROM SERVICES " + userEmailPassword.email + " " + userEmailPassword.password);
   return this.http.post<any>(this.ROOT_URL + "/login", userEmailPassword);
 }
}
