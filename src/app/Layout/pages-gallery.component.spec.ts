import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesGalleryComponent } from './pages-gallery.component';

describe('PagesGalleryComponent', () => {
  let component: PagesGalleryComponent;
  let fixture: ComponentFixture<PagesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
