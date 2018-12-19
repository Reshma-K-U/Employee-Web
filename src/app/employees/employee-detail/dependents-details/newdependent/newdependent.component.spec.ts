import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdependentComponent } from './newdependent.component';

describe('NewdependentComponent', () => {
  let component: NewdependentComponent;
  let fixture: ComponentFixture<NewdependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
