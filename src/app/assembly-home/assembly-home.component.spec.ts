import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyHomeComponent } from './assembly-home.component';

describe('AssemblyHomeComponent', () => {
  let component: AssemblyHomeComponent;
  let fixture: ComponentFixture<AssemblyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
