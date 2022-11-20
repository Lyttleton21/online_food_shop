import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/foodData';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Food;
  constructor(private foodListservice:FoodlistService,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      if(data.id){
        this.food = this.foodListservice.getFoodId(data.id);
      }
    })
  }



}
