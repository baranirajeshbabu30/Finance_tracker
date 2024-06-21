import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private transactions: Transaction[] = [];
  private storageAvailable: boolean;

  constructor() {
    this.storageAvailable = this.isLocalStorageAvailable();
    if (this.storageAvailable) {
      const savedTransactions = localStorage.getItem('transactions');
      if (savedTransactions) {
        this.transactions = JSON.parse(savedTransactions);
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions.slice());
  }
  getTransactionById(id: number): Transaction | undefined {
    return this.transactions.find(transaction => transaction.id === id);
  }
  

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.saveTransactions();
  }

  editTransaction(transaction: Transaction) {
    const index = this.transactions.findIndex(t => t.id === transaction.id);
    if (index > -1) {
      this.transactions[index] = transaction;
      this.saveTransactions();
    }
  }

  deleteTransaction(index: number): void {
    this.transactions.splice(index, 1);
    this.saveTransactions();
  }

  private saveTransactions(): void {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }

  getTotalIncome(): number {
    return this.transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
  }

  getTotalExpenses(): number {
    return this.transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
  }

  getBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }
}
