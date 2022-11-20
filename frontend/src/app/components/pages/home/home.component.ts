import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private foodListService:FoodlistService,
    private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data.searchTerm){
        //To make this data.searchTerm work
        // go to tsconfig.json change
        //"noPropertyAccessFromIndexSignature" to false,
        this.foods = this.foodListService.getAllFoodsBySearchTerm(data.searchTerm);
      }else{
        this.foods = this.foodListService.getAllFoods();
        //console.log(this.foods);
      }
    });

  }

}
