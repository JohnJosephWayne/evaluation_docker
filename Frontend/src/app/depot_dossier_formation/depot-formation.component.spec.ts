import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotFormationComponent } from './depot-formation.component';

describe('DepotFormationComponent', () => {
  let component: DepotFormationComponent;
  let fixture: ComponentFixture<DepotFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
