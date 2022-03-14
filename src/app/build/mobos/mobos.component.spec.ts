import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobosComponent } from './mobos.component';

describe('MobosComponent', () => {
  let component: MobosComponent;
  let fixture: ComponentFixture<MobosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
