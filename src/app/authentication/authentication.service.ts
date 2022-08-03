import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  authenticate(user: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: user,
      password: password,
    });
  }
}
