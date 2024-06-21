import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionPageComponent } from './component/transaction-page/transaction-page.component';
import { TransactionAddPageComponent } from './component/transaction-add-page/transaction-add-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TransactionPageComponent },
  { path: 'add-transaction', component: TransactionAddPageComponent },
  { path: 'edit-transaction/:id', component: TransactionAddPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
