import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjInfoComponent } from './proj-info.component';

describe('ProjInfoComponent', () => {
  let component: ProjInfoComponent;
  let fixture: ComponentFixture<ProjInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
