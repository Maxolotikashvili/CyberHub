import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReadyPcsSectionComponent } from './game-ready-pcs-section.component';

describe('GameReadyPcsSectionComponent', () => {
  let component: GameReadyPcsSectionComponent;
  let fixture: ComponentFixture<GameReadyPcsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameReadyPcsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReadyPcsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
