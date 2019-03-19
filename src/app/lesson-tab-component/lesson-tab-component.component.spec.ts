import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTabComponentComponent } from './lesson-tab-component.component';

describe('LessonTabComponentComponent', () => {
  let component: LessonTabComponentComponent;
  let fixture: ComponentFixture<LessonTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
