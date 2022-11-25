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
  foods:any

  constructor(private foodListService:FoodlistService,
    private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if(data.searchTerm){
        //To make this data.searchTerm work
        // go to tsconfig.json change
        //"noPropertyAccessFromIndexSignature" to false,
        this.foodListService.getAllFoodsBySearchTerm(data.searchTerm)
        .subscribe(search => {
          this.foods = search;
        });
      }//else
      // if(data.tag){
      //   this.foods =
      //   this.foodListService.getAllFoodByTag(data.tag);
      // }
       else{
        this.foodListService.getAllFoods()
        .subscribe(allfood => {
          this.foods = allfood;
        });
      }
    });

  }

}
