import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManufacturersSectionComponent } from './new-manufacturers-section.component';

describe('NewManufacturersSectionComponent', () => {
  let component: NewManufacturersSectionComponent;
  let fixture: ComponentFixture<NewManufacturersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewManufacturersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewManufacturersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
