import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/foodData';
import { FoodService } from 'src/app/services/food.service';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = []

  constructor(private foodService:FoodService) {
      }

  ngOnInit(): void {
    this.foods = this.foodService.getAllFoods();
    console.log(this.foods);
  }

}
