import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotRetardComponent } from './depot-retard.component';

describe('DepotRetardComponent', () => {
  let component: DepotRetardComponent;
  let fixture: ComponentFixture<DepotRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotRetardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
