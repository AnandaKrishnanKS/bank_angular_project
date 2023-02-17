import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transactionData: any

  constructor(private ds: DataService,private router: Router) {
    this.transactionData = this.ds.getTransaction(this.ds.currentAcno)
    // console.log(this.transactionData);

  }
}
