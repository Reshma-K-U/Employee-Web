import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewempsalaryComponent } from './newempsalary.component';

describe('NewempsalaryComponent', () => {
  let component: NewempsalaryComponent;
  let fixture: ComponentFixture<NewempsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewempsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewempsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
