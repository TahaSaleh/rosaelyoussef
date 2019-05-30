import { Component, OnInit, Input } from '@angular/core';
import { News } from './models/news';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titleTop = "Top News";
  titleFeatured="Featured News";
  TopNews:News[]=[];
  FeaturedNews:News[]=[];
  constructor(private _newsService:NewsService){
  }

  ngOnInit(){
    this._newsService.GetTopNews().subscribe(res=>{
      this.TopNews=res as News[];
    },error =>{console.log('top news error');},
    ()=>{}
    );
    this._newsService.GetFeaturedNews().subscribe(res=>{
      this.FeaturedNews=res as News[];
    },error =>{console.log('feature news error');},
    ()=>{}
    );
  }
   
}
