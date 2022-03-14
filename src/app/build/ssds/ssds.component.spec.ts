import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdsComponent } from './ssds.component';

describe('SsdsComponent', () => {
  let component: SsdsComponent;
  let fixture: ComponentFixture<SsdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
