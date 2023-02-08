import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: any

  constructor(private ds: DataService, private fb: FormBuilder) {

    this.user = this.ds.currentUser
  }

  depsitFrom = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  deposite() {
    var acno = this.depsitFrom.value.acno
    var psw = this.depsitFrom.value.psw
    var amnt = this.depsitFrom.value.amnt

    if (this.depsitFrom.valid) {
      const result = this.ds.deposite(acno, psw, amnt)
      if (result) {
        alert(`your account has been credited with amount Rs:${amnt}. 
       And your current balance is Rs:${result}`)
      } else {
        alert('account number or password incorect')
      }


    } else {
      alert('invalid form')
    }



  }
  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1
    var amnt = this.withdrawForm.value.amnt1

    if (this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno, psw, amnt)
      if (result) {
        alert(`your account has been debited with amount Rs:${amnt}. 
       And your current balance is Rs:${result}`)
      }
    } else {
      alert('invalid form')
    }


  }

}
