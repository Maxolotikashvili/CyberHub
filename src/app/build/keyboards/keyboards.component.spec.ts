import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardsComponent } from './keyboards.component';

describe('KeyboardsComponent', () => {
  let component: KeyboardsComponent;
  let fixture: ComponentFixture<KeyboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
