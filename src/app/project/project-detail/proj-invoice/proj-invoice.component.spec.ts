import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjInvoiceComponent } from './proj-invoice.component';

describe('ProjInvoiceComponent', () => {
  let component: ProjInvoiceComponent;
  let fixture: ComponentFixture<ProjInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
