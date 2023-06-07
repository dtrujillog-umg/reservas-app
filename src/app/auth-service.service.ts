import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private userType: string = '';

  constructor() {}

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setUserType(type: string) {
    this.userType = type;
  }

  getUserType() {
    return this.userType;
  }
}
