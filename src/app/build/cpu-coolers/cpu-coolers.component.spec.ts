import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCoolersComponent } from './cpu-coolers.component';

describe('CpuCoolersComponent', () => {
  let component: CpuCoolersComponent;
  let fixture: ComponentFixture<CpuCoolersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuCoolersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuCoolersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
