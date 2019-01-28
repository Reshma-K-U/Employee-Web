import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassetsComponent } from './editassets.component';

describe('EditassetsComponent', () => {
  let component: EditassetsComponent;
  let fixture: ComponentFixture<EditassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
