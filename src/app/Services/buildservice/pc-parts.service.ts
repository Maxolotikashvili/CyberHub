import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcPartsService {

  constructor(private http: HttpClient) {}

  getPcParts(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>('http://localhost:3000/');
  }
}