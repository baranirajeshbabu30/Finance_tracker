import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FinanceService } from 'src/app/service/finance.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  transactionForm!: FormGroup;
  submitted: boolean = false;
  submitMessage: string = '';
  isEdit: boolean = false;
  transactionId!: number;
  types: string[] = ['income', 'expense'];

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: FinanceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.transactionId = +id;
        const transaction = this.transactionService.getTransactionById(this.transactionId);
        this.initializeForm(transaction);
      } else {
        this.isEdit = false;
        this.initializeForm();
      }
    });
  }

  initializeForm(transaction?: Transaction): void {
    this.transactionForm = this.formBuilder.group({
      description: [transaction ? transaction.description : '', Validators.required],
      amount: [transaction ? transaction.amount : '', Validators.required],
      date: [transaction ? transaction.date : '', Validators.required],
      type: [transaction ? transaction.type : '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const formValues = this.transactionForm.value;
      const transaction: Transaction = {
        id: this.isEdit ? this.transactionId : new Date().getTime(), // Example id generation
        description: formValues.description,
        amount: formValues.amount,
        date: formValues.date,
        type: formValues.type
      };

      if (this.isEdit) {
        this.transactionService.editTransaction(transaction);
        this.submitMessage = 'Transaction updated successfully.';
      } else {
        this.transactionService.addTransaction(transaction);
        this.submitMessage = 'Transaction added successfully.';
      }
      this.submitted = true;
      this.transactionForm.reset();
      this.router.navigate(['/home']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }
}
