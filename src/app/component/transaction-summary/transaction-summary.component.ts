import { Component } from '@angular/core';
import { FinanceService } from 'src/app/service/finance.service';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent {
  totalIncome: number = 0;
  totalExpenses: number = 0;
  balance: number = 0;

  constructor(private transactionService: FinanceService) {}

  ngOnInit(): void {
    this.updateSummary();
    this.transactionService.getTransactions().subscribe(() => {
      this.updateSummary();
    });
  }

  updateSummary() {
    this.totalIncome = this.transactionService.getTotalIncome();
    this.totalExpenses = this.transactionService.getTotalExpenses();
    this.balance = this.transactionService.getBalance();
  }
}
