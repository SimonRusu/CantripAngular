import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPredefinedComponent } from './card-predefined.component';

describe('CardPredefinedComponent', () => {
  let component: CardPredefinedComponent;
  let fixture: ComponentFixture<CardPredefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPredefinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPredefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
