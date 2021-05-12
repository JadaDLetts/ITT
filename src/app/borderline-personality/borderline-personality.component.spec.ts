import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderlinePersonalityComponent } from './borderline-personality.component';

describe('BorderlinePersonalityComponent', () => {
  let component: BorderlinePersonalityComponent;
  let fixture: ComponentFixture<BorderlinePersonalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderlinePersonalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderlinePersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
