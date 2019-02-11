import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousepropertyComponent } from './houseproperty.component';

describe('HousepropertyComponent', () => {
  let component: HousepropertyComponent;
  let fixture: ComponentFixture<HousepropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousepropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
