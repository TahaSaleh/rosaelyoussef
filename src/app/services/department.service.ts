import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  depts:Department[]=[];
  constructor(private _httpClient:HttpClient) { }

  GetAll()
  {
    return this._httpClient.get(`${environment.APIURL}/News/Departments`);
  }
}
