import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCalendarComponent } from './pages-calendar.component';

describe('PagesCalendarComponent', () => {
  let component: PagesCalendarComponent;
  let fixture: ComponentFixture<PagesCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
