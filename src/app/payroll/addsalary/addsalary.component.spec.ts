import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalaryComponent } from './addsalary.component';

describe('AddsalaryComponent', () => {
  let component: AddsalaryComponent;
  let fixture: ComponentFixture<AddsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
