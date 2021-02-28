import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandcontractComponent } from './landcontract.component';

describe('LandcontractComponent', () => {
  let component: LandcontractComponent;
  let fixture: ComponentFixture<LandcontractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandcontractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
