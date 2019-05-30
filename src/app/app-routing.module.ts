import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Details/:id',component:DetailsComponent},
  {path:'Department/:id',component:DepartmentComponent},
  {path:'Home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
