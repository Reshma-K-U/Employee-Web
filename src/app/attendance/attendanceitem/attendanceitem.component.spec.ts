import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceitemComponent } from './attendanceitem.component';

describe('AttendanceitemComponent', () => {
  let component: AttendanceitemComponent;
  let fixture: ComponentFixture<AttendanceitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
