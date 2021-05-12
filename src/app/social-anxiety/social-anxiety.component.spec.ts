import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAnxietyComponent } from './social-anxiety.component';

describe('SocialAnxietyComponent', () => {
  let component: SocialAnxietyComponent;
  let fixture: ComponentFixture<SocialAnxietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAnxietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
