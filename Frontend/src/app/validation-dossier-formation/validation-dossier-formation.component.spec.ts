import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDossierFormationComponent } from './validation-dossier-formation.component';

describe('ValidationDossierFormationComponent', () => {
  let component: ValidationDossierFormationComponent;
  let fixture: ComponentFixture<ValidationDossierFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationDossierFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationDossierFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
