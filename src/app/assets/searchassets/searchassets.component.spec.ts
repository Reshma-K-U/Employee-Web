import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchassetsComponent } from './searchassets.component';

describe('SearchassetsComponent', () => {
  let component: SearchassetsComponent;
  let fixture: ComponentFixture<SearchassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
