import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotAbsenceComponent } from './depot-absence.component';

describe('DepotAbsenceComponent', () => {
  let component: DepotAbsenceComponent;
  let fixture: ComponentFixture<DepotAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotAbsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
