import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveDetailComponent } from './employee-leave-detail.component';

describe('EmployeeLeaveDetailComponent', () => {
  let component: EmployeeLeaveDetailComponent;
  let fixture: ComponentFixture<EmployeeLeaveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeaveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
