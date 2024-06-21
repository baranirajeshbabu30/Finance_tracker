import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/service/finance.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this.financeService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }
}
