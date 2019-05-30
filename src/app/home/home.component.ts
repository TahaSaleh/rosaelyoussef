import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news:News[]=[];
  depts:Department[]=[];
  constructor(private _newsService:NewsService,private _departmentService:DepartmentService) { }

  ngOnInit() {
     this._departmentService.GetAll().subscribe(res=>{
       this.depts=res as Department[];
       this._newsService.GetAll(this.depts[0].ID).subscribe(res=>{
         this.news=res as News[];
       });
     });
  }

}
