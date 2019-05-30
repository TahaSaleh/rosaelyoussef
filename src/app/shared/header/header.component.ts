import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  depts:Department[]=[];
  constructor(private _depatmentService:DepartmentService) { }

  ngOnInit() {
    this._depatmentService.GetAll().subscribe(res=>{
      this.depts=res as Department[];    
      this.depts=this.depts.filter(x=>x.ShowInMainMenu);
    },
    error=>{alert('error')},
    ()=>{}
    );
  }
  // shownDepartments()
  // {
  //   return this.depts.filter(x=>x.ShowInMainMenu);
  // }
}
