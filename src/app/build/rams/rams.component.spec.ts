import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsComponent } from './rams.component';

describe('RamsComponent', () => {
  let component: RamsComponent;
  let fixture: ComponentFixture<RamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
