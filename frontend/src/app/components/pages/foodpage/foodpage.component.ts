import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Food } from 'src/app/models/foodData';
import { CartService } from 'src/app/services/cart.service';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Food;
  constructor(private foodListservice:FoodlistService,
    private activateRoute:ActivatedRoute,
    private cartService:CartService,
    private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      if(data.id){
        this.food = this.foodListservice.getFoodId(data.id);
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
