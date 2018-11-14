import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesChatComponent } from './pages-chat.component';

describe('PagesChatComponent', () => {
  let component: PagesChatComponent;
  let fixture: ComponentFixture<PagesChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
