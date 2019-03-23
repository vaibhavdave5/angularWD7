import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicpillComponent } from './topicpill.component';

describe('TopicpillComponent', () => {
  let component: TopicpillComponent;
  let fixture: ComponentFixture<TopicpillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicpillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicpillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
