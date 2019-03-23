import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaWidgetComponent } from './para-widget.component';

describe('ParaWidgetComponent', () => {
  let component: ParaWidgetComponent;
  let fixture: ComponentFixture<ParaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
