import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    title:'food-mine',
    component:HomeComponent,
  },
  {
    path:'search/:searchTerm',
    title:'Search Food',
    component:HomeComponent,
  },
  {
    path:'tag/:tag',
    title:'Food Tag',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
