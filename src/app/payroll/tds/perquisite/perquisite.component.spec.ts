import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerquisiteComponent } from './perquisite.component';

describe('PerquisiteComponent', () => {
  let component: PerquisiteComponent;
  let fixture: ComponentFixture<PerquisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerquisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerquisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
