import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any

  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0 },
    1003: { acno: 1003, username: "arun", password: "abc123", balance: 0 },
    1004: { acno: 1004, username: "akhil", password: "abc123", balance: 0 }

  }


  register(uname: any, acno: any, psw: any) {
    if (acno in this.userDetails) {
      return false

    } else {
      this.userDetails[acno] = { acno, username: uname, password: psw, balance: 0 }
      console.log(this.userDetails);
      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {

        this.currentUser = userDetails[acno]['username']

        return true

      } else {
        return false
      }
    } else {
      return false
    }

  }
}