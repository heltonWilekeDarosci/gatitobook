import { environment } from './../../../environments/environment';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  signUpNewUser(newUser: NewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  verifyExistingUser(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`)
  }
}
