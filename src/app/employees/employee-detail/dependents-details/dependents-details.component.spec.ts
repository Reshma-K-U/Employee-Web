import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsDetailsComponent } from './dependents-details.component';

describe('DependentsDetailsComponent', () => {
  let component: DependentsDetailsComponent;
  let fixture: ComponentFixture<DependentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
