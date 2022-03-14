import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetsComponent } from './headsets.component';

describe('HeadsetsComponent', () => {
  let component: HeadsetsComponent;
  let fixture: ComponentFixture<HeadsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadsetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
