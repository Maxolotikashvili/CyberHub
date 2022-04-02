import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PctypeComponent } from './pctype.component';

describe('PctypeComponent', () => {
  let component: PctypeComponent;
  let fixture: ComponentFixture<PctypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PctypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PctypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
