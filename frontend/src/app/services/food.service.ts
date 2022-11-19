import { Injectable } from '@angular/core';
import { Food } from '../models/foodData';
import { FoodlistService } from './foodlist.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private foodListServices:FoodlistService) { }

  getAllFoods(){
    return this.foodListServices.foodList;
  }


}
