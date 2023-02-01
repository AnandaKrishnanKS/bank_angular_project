import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: string = "your perfect banking partner"
  inptplcholdr = "Account Number"

  acno = ''
  pswd = ''


  constructor(public router: Router, public ds: DataService) { }

  login() {
    var acno = this.acno
    var pswd = this.pswd
    var userDetails = this.ds.userDetails
    if (acno in userDetails) {
      if (pswd == userDetails[acno]["password"]) {
        alert('login success')
        this.router.navigateByUrl('dashboard')
      } else {
        alert('incorrect password')
      }
    } else {
      alert('account number incorrect or not registerd')
    }
  }

}
