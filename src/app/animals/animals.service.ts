import { environment } from './../../environments/environment';
import { TokenService } from './../authentication/token.service';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { animals } from './animals';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  userList(userName: string): Observable<animals> {
    return this.http.get<animals>(`${API}/${userName}/photos`);
  }

  idSearch(id: number): Observable<animals> {
    return this.http.get<animals>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<animals> {
    return this.http.delete<animals>(`${API}/photos/${id}`);
  }

  toLike(id: number): Observable<boolean> {
    return this.http.post(
      `${API}/photos/${id}/likes`,
      {},
      {observe: 'response'},
    ).pipe(
      mapTo(true),
      catchError((error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      })
    );
  }
}
