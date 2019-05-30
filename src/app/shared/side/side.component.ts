import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @Input() news:News[]=[];
  @Input() title:string="";
  constructor() { }

  ngOnInit() {
  }

}
