import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PustoComponent } from './pusto.component';

describe('PustoComponent', () => {
  let component: PustoComponent;
  let fixture: ComponentFixture<PustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PustoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
