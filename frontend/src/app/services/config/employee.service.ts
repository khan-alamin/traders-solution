import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from 'src/app/model/config/manager.model';
import { AppResponse } from '../../dto/response.dto';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  constructor(private http: HttpClient, private config: ConfigService) { }

  async getManagers(): Promise<AppResponse<Manager[]>> {
    const url = `${this.config.apiUrl}/employee/managers`;
    let data = await fetch(url);
    return await data?.json();
  }
}
