import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignassetsComponent } from './assignassets.component';

describe('AssignassetsComponent', () => {
  let component: AssignassetsComponent;
  let fixture: ComponentFixture<AssignassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
