import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { AngularAllComponent } from './angular-all/angular-all.component';
import { CrudExampleComponent } from './crudexample/crudexample.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  {path:'', redirectTo:'crud', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  { path:'resources', component:ResourcesComponent},
  { path:'angular', component:AngularAllComponent},
  { path:'crudExample', component:CrudExampleComponent},
  { path:'crud', component:CrudComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
