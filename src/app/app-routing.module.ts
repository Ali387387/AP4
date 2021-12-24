import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { HomeComponent } from './Home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { RecordsComponent } from './records/records.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'records', component:RecordsComponent},
  {path:'jobs', component:JobsComponent},
  {path:'jobs/register',component:RegisterComponent},
  {path:'jobs/addjob', component:AddjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
