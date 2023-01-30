import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: string = "your perfect banking partner"
  inptplcholdr = "Account Number"

  acno = ''
  // or  acno:any
  pswd = ''

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0 },
    1003: { acno: 1003, username: "arun", password: "abc123", balance: 0 },
    1004: { acno: 1004, username: "akhil", password: "abc123", balance: 0 }

  }

  constructor() { }

  login() {
    alert('login clicked')
  }

  acnoChange(event: any) {
    this.acno = event.target.value
    // initialised in line 13
    console.log(this.acno);

  }

  pswChange(event: any) {
    // initialised in line 16
    this.pswd = event.target.value
    console.log(this.pswd);


  }

}
