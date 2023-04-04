import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeComponentComponent } from './badge-component.component';

describe('BadgeComponentComponent', () => {
  let component: BadgeComponentComponent;
  let fixture: ComponentFixture<BadgeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
