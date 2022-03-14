import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpusComponent } from './gpus.component';

describe('GpusComponent', () => {
  let component: GpusComponent;
  let fixture: ComponentFixture<GpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
