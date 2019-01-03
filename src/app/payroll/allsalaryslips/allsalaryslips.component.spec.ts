import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsalaryslipsComponent } from './allsalaryslips.component';

describe('AllsalaryslipsComponent', () => {
  let component: AllsalaryslipsComponent;
  let fixture: ComponentFixture<AllsalaryslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsalaryslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsalaryslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
