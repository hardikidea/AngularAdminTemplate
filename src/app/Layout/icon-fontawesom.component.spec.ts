import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFontawesomComponent } from './icon-fontawesom.component';

describe('IconFontawesomComponent', () => {
  let component: IconFontawesomComponent;
  let fixture: ComponentFixture<IconFontawesomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFontawesomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFontawesomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
