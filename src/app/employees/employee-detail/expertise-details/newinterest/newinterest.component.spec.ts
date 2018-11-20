import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinterestComponent } from './newinterest.component';

describe('NewinterestComponent', () => {
  let component: NewinterestComponent;
  let fixture: ComponentFixture<NewinterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
