import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFullCalendarComponent } from './p-full-calendar.component';

describe('PFullCalendarComponent', () => {
  let component: PFullCalendarComponent;
  let fixture: ComponentFixture<PFullCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFullCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PFullCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
