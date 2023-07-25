import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PcPartType } from 'src/app/model'
import { Observable } from 'rxjs';
import { API_URL } from '../../api-url';

@Injectable({
  providedIn: 'root'
})
export class PcPartsService {

  constructor(private http: HttpClient) {}

  getPcParts(): Observable<PcPartType[]> {
    return this.http.get<PcPartType[]>(`${API_URL}parts`);
  }
}