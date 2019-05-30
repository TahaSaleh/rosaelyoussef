import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   id:number=0;
   new:News=new News();
  constructor(private _activedRoute:ActivatedRoute,private _newsService:NewsService) { }

  ngOnInit() {
    this._activedRoute.paramMap.subscribe(param=>{
    this.id=+param.get("id");
    this._newsService.GetByID(this.id).subscribe(res=>{
      this.new=res as News;
    });
    });
    
  }

}
