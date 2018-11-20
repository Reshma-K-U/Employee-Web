import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexperienceComponent } from './newexperience.component';

describe('NewexperienceComponent', () => {
  let component: NewexperienceComponent;
  let fixture: ComponentFixture<NewexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
