import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSettingsComponent } from './route-settings.component';

describe('RouteSettingsComponent', () => {
  let component: RouteSettingsComponent;
  let fixture: ComponentFixture<RouteSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
