import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dsm5Component } from './dsm5.component';

describe('Dsm5Component', () => {
  let component: Dsm5Component;
  let fixture: ComponentFixture<Dsm5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dsm5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dsm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
