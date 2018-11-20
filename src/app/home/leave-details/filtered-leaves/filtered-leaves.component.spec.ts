import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredLeavesComponent } from './filtered-leaves.component';

describe('FilteredLeavesComponent', () => {
  let component: FilteredLeavesComponent;
  let fixture: ComponentFixture<FilteredLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
