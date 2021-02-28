import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandrentingComponent } from './landrenting.component';

describe('LandrentingComponent', () => {
  let component: LandrentingComponent;
  let fixture: ComponentFixture<LandrentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandrentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandrentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
