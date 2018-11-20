import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevExperienceDetailsComponent } from './prev-experience-details.component';

describe('PrevExperienceDetailsComponent', () => {
  let component: PrevExperienceDetailsComponent;
  let fixture: ComponentFixture<PrevExperienceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevExperienceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
