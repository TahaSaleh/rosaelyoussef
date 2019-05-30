import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  news:News[]=[];
  deptid:number=0;
  constructor(private _activedRoute:ActivatedRoute,private _newsService:NewsService) { }

  ngOnInit() {
     this._activedRoute.paramMap.subscribe(params=>{
       this.deptid=+params.get("id");
       this._newsService.GetByDeptID(this.deptid).subscribe(res=>{
       this.news=res as News[];
       });
     });
  }

}
