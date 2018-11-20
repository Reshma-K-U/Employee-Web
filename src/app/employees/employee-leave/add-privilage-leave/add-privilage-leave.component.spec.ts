import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrivilageLeaveComponent } from './add-privilage-leave.component';

describe('AddPrivilageLeaveComponent', () => {
  let component: AddPrivilageLeaveComponent;
  let fixture: ComponentFixture<AddPrivilageLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrivilageLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrivilageLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
