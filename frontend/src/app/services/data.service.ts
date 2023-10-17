import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = process.env['BASE_URL'];

  data: any = {};

  constructor(private http: HttpClient) { }

  save(requestData: any, endPoint: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endPoint}/save`, requestData, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  async getList(endPoint: string): Promise<any[]> {
    let data = await fetch(`${this.baseUrl}/${endPoint}`);
    return await data?.json();
  }


  delete(id: number, endPoint: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endPoint}/delete/${id}`);
  }
}
