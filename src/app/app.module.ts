import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './layout/home/home.component';
import { TransactionSummaryComponent } from './component/transaction-summary/transaction-summary.component';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TransactionPageComponent } from './component/transaction-page/transaction-page.component';
import { TransactionAddPageComponent } from './component/transaction-add-page/transaction-add-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionChartComponent } from './component/transaction-chart/transaction-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TransactionSummaryComponent,
    TransactionFormComponent,
    TransactionListComponent,
    TransactionPageComponent,
    TransactionAddPageComponent,
    TransactionChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
MatCardModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
ReactiveFormsModule,
FormsModule,
MatIconModule,
MatTableModule,
MatChipsModule,
BrowserAnimationsModule,
NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
