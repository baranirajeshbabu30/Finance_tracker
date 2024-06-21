import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction-chart',
  templateUrl: './transaction-chart.component.html',
  styleUrls: ['./transaction-chart.component.scss']
})
export class TransactionChartComponent implements OnChanges {
  @Input() transactions: Transaction[] = [];
  
  public chartData!: ChartConfiguration<'pie'>['data'];
  public chartLabels!: string[];
  public chartOptions: ChartOptions = {
    responsive: true,
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['transactions']) {
      this.updateChart();
    }
  }

  private updateChart() {
    const incomeTotal = this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expenseTotal = this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    this.chartLabels = ['Income', 'Expenses'];
    this.chartData = {
      labels: this.chartLabels,
      datasets: [
        { 
          data: [incomeTotal, expenseTotal],
          backgroundColor: ['#4caf50', '#f44336']
        }
      ]
    };
  }
}
