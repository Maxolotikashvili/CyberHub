import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model'
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcPartsService {

  constructor(private http: HttpClient) {}

  getPcParts(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>('http://localhost:3000/');
  }

  sendPost(user: any): Observable<string> {
    return this.http.post<string>('http://localhost:3000/users/register', user);
  }
}