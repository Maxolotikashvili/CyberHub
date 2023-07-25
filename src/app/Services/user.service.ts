import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  //
  registerNewUser(user: {username: string, email: string, password: string}): Observable<string> {
    return this.http.post<string>(`API_URL}register`, user);
  }

  //
  loginUser(user: {username?: string, email: string, password: string}): Observable<{message: string, token: string}> {
    return this.http.post<{message: string, token: string}>(`${API_URL}login`, user);
  }
}
