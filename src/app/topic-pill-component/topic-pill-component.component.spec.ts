import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPillComponentComponent } from './topic-pill-component.component';

describe('TopicPillComponentComponent', () => {
  let component: TopicPillComponentComponent;
  let fixture: ComponentFixture<TopicPillComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPillComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPillComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
