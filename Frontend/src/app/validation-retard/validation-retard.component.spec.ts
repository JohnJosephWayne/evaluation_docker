import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRetardComponent } from './validation-retard.component';

describe('ValidationRetardComponent', () => {
  let component: ValidationRetardComponent;
  let fixture: ComponentFixture<ValidationRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationRetardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
