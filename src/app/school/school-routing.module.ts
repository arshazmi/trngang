import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SchooltableComponent } from './schooltable/schooltable.component';

const routes: Routes = [
  {path:'school/add',component:RegisterComponent},
  {path:'school/update/:id',component:RegisterComponent},
  {path:'table',component:SchooltableComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
