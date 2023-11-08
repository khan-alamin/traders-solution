import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Manager } from 'src/app/model/config/manager.model';
import { AppResponse } from 'src/app/dto/response.dto';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {


  constructor(private http: HttpClient, private config: ConfigService) { }

  async getManagers(): Promise<AppResponse<Manager[]>> {
    const url = `${this.config.apiUrl}/departments/managers`;
    let data = await fetch(url);
    return await data?.json();
  }
}
