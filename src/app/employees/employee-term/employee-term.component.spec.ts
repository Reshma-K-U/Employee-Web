import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTermComponent } from './employee-term.component';

describe('EmployeeTermComponent', () => {
  let component: EmployeeTermComponent;
  let fixture: ComponentFixture<EmployeeTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
