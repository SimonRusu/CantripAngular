import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedRoutesPageComponent } from './predefined-routes-page.component';

describe('PredefinedRoutesPageComponent', () => {
  let component: PredefinedRoutesPageComponent;
  let fixture: ComponentFixture<PredefinedRoutesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredefinedRoutesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedRoutesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
