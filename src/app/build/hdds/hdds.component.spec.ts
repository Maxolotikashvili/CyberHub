import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HddsComponent } from './hdds.component';

describe('HddsComponent', () => {
  let component: HddsComponent;
  let fixture: ComponentFixture<HddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HddsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
