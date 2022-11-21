import { Food } from "./foodData";

export class CartItem{
  constructor(public food:Food){}
  quatity:number = 1;
  price:number = this.food.price;
}
