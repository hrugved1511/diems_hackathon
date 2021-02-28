import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandfarmingComponent } from './landfarming.component';

describe('LandfarmingComponent', () => {
  let component: LandfarmingComponent;
  let fixture: ComponentFixture<LandfarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandfarmingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandfarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
