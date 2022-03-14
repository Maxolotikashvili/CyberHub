import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsusComponent } from './psus.component';

describe('PsusComponent', () => {
  let component: PsusComponent;
  let fixture: ComponentFixture<PsusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
