import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelComponent } from './intel.component';

describe('IntelComponent', () => {
  let component: IntelComponent;
  let fixture: ComponentFixture<IntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
