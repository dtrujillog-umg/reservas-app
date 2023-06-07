import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private userType: string = '';

  constructor() {}

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  setUserType(userType: string) {
    this.userType = userType;
  }

  getUserType() {
    return this.userType;
  }
}
