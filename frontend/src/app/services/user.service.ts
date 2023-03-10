import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, window } from 'rxjs';
import { IUserLogin } from '../models/interface/iUserLogin';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';
import { USER_LOGIN_URL } from '../shared/constants/urls';


const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());

  public userObservable:Observable<User>;

  constructor(private http:HttpClient,
    private toastr:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }


  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastr.success(
            `Welcome to Foodmine ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastr.error(errorResponse.message, 'Login Failed')
        }
      })
    );
  }

  private setUserToLocalStorage(user:User){
      localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson){
      return JSON.parse(userJson) as User;
    }else{
      return new User
    }
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
  }
}
