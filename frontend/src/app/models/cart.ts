import { CartItem } from "./cartitem";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  totelCount:number = 0;
}
