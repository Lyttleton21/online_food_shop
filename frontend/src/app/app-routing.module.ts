import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodpageComponent } from './components/pages/foodpage/foodpage.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

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
  },
  {
    path:'cart-page',
    component: CartPageComponent,
    title:'Cart Page'
  },
  {
    path:'login',
    title:'Login',
    component:LoginPageComponent
  },
  {
    path:'**',
    title:'Nothing Found!!!',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
