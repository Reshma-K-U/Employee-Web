import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountsComponent } from './addaccounts.component';

describe('AddaccountsComponent', () => {
  let component: AddaccountsComponent;
  let fixture: ComponentFixture<AddaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
