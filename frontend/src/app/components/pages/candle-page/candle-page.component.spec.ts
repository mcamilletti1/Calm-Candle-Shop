import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlePageComponent } from './candle-page.component';

describe('CandlePageComponent', () => {
  let component: CandlePageComponent;
  let fixture: ComponentFixture<CandlePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandlePageComponent]
    });
    fixture = TestBed.createComponent(CandlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
