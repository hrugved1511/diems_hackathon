import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryFromComponent } from './industry-from.component';

describe('IndustryFromComponent', () => {
  let component: IndustryFromComponent;
  let fixture: ComponentFixture<IndustryFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
