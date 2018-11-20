import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewqualificationComponent } from './newqualification.component';

describe('NewqualificationComponent', () => {
  let component: NewqualificationComponent;
  let fixture: ComponentFixture<NewqualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewqualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewqualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
