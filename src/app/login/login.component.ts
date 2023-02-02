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


  constructor(private router: Router, private ds: DataService) { }

  login() {
    var acno = this.acno
    var pswd = this.pswd
    const result = this.ds.login(acno, pswd)
    if (result) {
      alert('login success')
      this.router.navigateByUrl('dashboard')
    } else {
      alert('incurect acount number or password')
    }
  }

}
