import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdashboardComponent } from './teacherdashboard.component';

describe('TeacherdashboardComponent', () => {
  let component: TeacherdashboardComponent;
  let fixture: ComponentFixture<TeacherdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
