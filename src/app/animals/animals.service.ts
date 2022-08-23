import { environment } from './../../environments/environment';
import { TokenService } from './../authentication/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { animals } from './animals';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  userList(userName: string): Observable<animals> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<animals>(`${API}/${userName}/photos`, {
      headers,
    });
  }
}
