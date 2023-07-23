import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  //
  registerNewUser(user: {username: string, email: string, password: string}): Observable<string> {
    return this.http.post<string>(`${this.API_URL}/register`, user);
  }

  //
  loginUser(user: {username?: string, email: string, password: string}): Observable<{message: string, token: string}> {
    return this.http.post<{message: string, token: string}>(`${this.API_URL}/login`, user);
  }
}
