import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any
  userDetails: any

  constructor(private http:HttpClient) { 
    this.getData()
  }

  // userDetails: any = {
  //   1000: { acno: 1000, username: "anu", password: "abc123", balance: 0, transaction: [] },
  //   1001: { acno: 1001, username: "amal", password: "abc123", balance: 0, transaction: [] },
  //   1003: { acno: 1003, username: "arun", password: "abc123", balance: 0, transaction: [] },
  //   1004: { acno: 1004, username: "akhil", password: "abc123", balance: 0, transaction: [] }
  // }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", this.currentUser)
    }
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
  }

  getData(){
    if(localStorage.getItem('database')){
this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentUser')){
      this.currentUser=localStorage.getItem('currentUser')
    }
    if(localStorage.getItem('currentAcno')){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||'')
    }
  }


  register(uname: any, acno: any, psw: any) {
   //create body data
    const data={uname,acno,psw}
   return this.http.post('http://localhost:3000/register',data)
    

  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) { 

        this.currentUser = userDetails[acno]['username']

        this.currentAcno = acno

        this.saveData()

        return true

      } else {
        return false
      }
    } else {
      return false
    }

  }

  deposite(acnum: any, password: any, amount: any) {
    let userDetails = this.userDetails
    //to convert string into number
    var amnt = parseInt(amount)
    if (acnum in userDetails) {
      if (password == userDetails[acnum]["password"]) {
        //update balace
        userDetails[acnum]["balance"] += amnt

        //transaction data storage
        userDetails[acnum]["transaction"].push({ Type: "Credit", amount: amnt })

        this.saveData()

        //return balance
        return userDetails[acnum]["balance"]


      } else {
        return false
      }
    } else {
      return false
    }
  }
  withdraw(acnum: any, password: any, amount: any) {
    let userDetails = this.userDetails
    //to convert string into number
    var amnt = parseInt(amount)
    if (acnum in userDetails) {
      if (password == userDetails[acnum]["password"]) {

        if (amnt <= userDetails[acnum]["balance"]) {
          //update balace
          userDetails[acnum]["balance"] -= amnt

          //transaction data storage
          userDetails[acnum]["transaction"].push({ Type: "Debit", amount: amnt })
          // console.log(userDetails);

          this.saveData()

          //return balance
          return userDetails[acnum]["balance"]
        } else {
          alert(`insufficient balance`)
          return false
        }

      } else {
        alert(`password incorect`)
        return false
      }
    } else {
      alert(`account number incorrect`)
      return false
    }
  }
  getTransaction(acno: any) {

    // console.log(acno);

    return this.userDetails[acno]["transaction"]

  }
}