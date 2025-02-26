import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAbsenceComponent } from './validation-absence.component';

describe('ValidationAbsenceComponent', () => {
  let component: ValidationAbsenceComponent;
  let fixture: ComponentFixture<ValidationAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationAbsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
