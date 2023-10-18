import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {  

  data: any = {};

  constructor(private http: HttpClient, private config: ConfigService) { }

  save(requestData: any, endPoint: string): Observable<any> {
    return this.http.post<any>(`${this.config.apiUrl}/${endPoint}/save`, requestData, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  async getList(endPoint: string): Promise<any[]> {
    let data = await fetch(`${this.config.apiUrl}/${endPoint}`);
    return await data?.json();
  }


  delete(id: number, endPoint: string): Observable<any> {
    return this.http.delete(`${this.config.apiUrl}/${endPoint}/delete/${id}`);
  }
}
