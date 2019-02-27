import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDocComponent } from './client-doc.component';

describe('ClientDocComponent', () => {
  let component: ClientDocComponent;
  let fixture: ComponentFixture<ClientDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
