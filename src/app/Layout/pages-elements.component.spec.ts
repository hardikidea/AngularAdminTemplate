import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesElementsComponent } from './pages-elements.component';

describe('PagesElementsComponent', () => {
  let component: PagesElementsComponent;
  let fixture: ComponentFixture<PagesElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
