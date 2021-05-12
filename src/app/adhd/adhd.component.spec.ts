import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdComponent } from './adhd.component';

describe('AdhdComponent', () => {
  let component: AdhdComponent;
  let fixture: ComponentFixture<AdhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
