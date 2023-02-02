import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {

  acno = ''
  pswd = ''
  uname = ''


  constructor(private ds: DataService, private router: Router) { }

  register() {
    var acno = this.acno
    var pswd = this.pswd
    var uname = this.uname

    const result = this.ds.register(uname, acno, pswd)
    if (result) {
      alert('registered')
      this.router.navigateByUrl('')
    } else {

      alert('user alredy exists')
    }

  }
}
