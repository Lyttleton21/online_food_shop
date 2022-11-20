import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodpageComponent } from './components/pages/foodpage/foodpage.component';
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
  },
  {
    path:'food/:id',
    component:FoodpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
