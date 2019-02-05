import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDocComponent } from './proj-doc.component';

describe('ProjDocComponent', () => {
  let component: ProjDocComponent;
  let fixture: ComponentFixture<ProjDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
