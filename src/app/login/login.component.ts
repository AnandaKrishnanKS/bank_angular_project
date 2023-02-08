import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.psw

    if (this.loginForm.valid) {
      const result = this.ds.login(acno, pswd)
      if (result) {
        alert('login success')
        this.router.navigateByUrl('dashboard')
      } else {
        alert('incurect acount number or password')
      }

    } else {
      alert('invalid form')
    }

  }

}
