import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private _httpClient:HttpClient) { }

  GetAll(deptid:number)
  {
    return this._httpClient.get(`${environment.APIURL}/News/Department/${deptid}`);
  }
  GetByID(id:number)
  {
    return this._httpClient.get(`${environment.APIURL}/News/item/${id}`);
  }
  GetByDeptID(id:number)
  {
    return this._httpClient.get(`${environment.APIURL}/News/Department/${id}`);
  }
  GetTopNews()
  {
    return this._httpClient.get(`${environment.APIURL}/News/TopNews`);
  }
  GetFeaturedNews()
  {
    return this._httpClient.get(`${environment.APIURL}/News/FeaturedNews`);
  }
}
