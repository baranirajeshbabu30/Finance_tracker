import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAddPageComponent } from './transaction-add-page.component';

describe('TransactionAddPageComponent', () => {
  let component: TransactionAddPageComponent;
  let fixture: ComponentFixture<TransactionAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
