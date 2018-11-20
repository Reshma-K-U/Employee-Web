import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevExpComponent } from './prev-exp.component';

describe('PrevExpComponent', () => {
  let component: PrevExpComponent;
  let fixture: ComponentFixture<PrevExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
