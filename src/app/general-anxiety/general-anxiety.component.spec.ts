import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAnxietyComponent } from './general-anxiety.component';

describe('GeneralAnxietyComponent', () => {
  let component: GeneralAnxietyComponent;
  let fixture: ComponentFixture<GeneralAnxietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAnxietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
