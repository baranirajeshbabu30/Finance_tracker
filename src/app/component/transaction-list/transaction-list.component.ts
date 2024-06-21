import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/models/transaction';
import { FinanceService } from 'src/app/service/finance.service';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  displayedColumns: string[] = ['date', 'description', 'amount', 'type', 'action'];
  dataSource!: MatTableDataSource<Transaction>;
  dialog: any;
 
  constructor(private transactionService: FinanceService, private router:Router) 
    
   { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.dataSource = new MatTableDataSource(this.transactions);
    });
  }

  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  deleteTransaction(id: any) {
    this.transactionService.deleteTransaction(id);
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
      if (this.dataSource) {
        this.dataSource.data = this.transactions; // Update the data source
      }
    });

  }
    editTransaction(transaction: Transaction) {
      this.router.navigate(['/edit-transaction', transaction.id]);
    }
    
  }
  

