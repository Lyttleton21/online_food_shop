import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'nav_header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 cartQuantity = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(newCart => {
      this.cartQuantity = newCart.totelCount;
    })
  }

}
