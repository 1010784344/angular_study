import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscontentComponent } from './newscontent.component';

describe('NewscontentComponent', () => {
  let component: NewscontentComponent;
  let fixture: ComponentFixture<NewscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewscontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
