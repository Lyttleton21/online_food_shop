import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'nav_header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 cartQuantity = 0;
 user!:User;
  constructor(private cartService:CartService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(newCart => {
      this.cartQuantity = newCart.totelCount;
    })

    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logout(){
    this.userService.logout();
    window.location.reload();
  }

  get isAuth(){
    return this.user.token;
  }

}
