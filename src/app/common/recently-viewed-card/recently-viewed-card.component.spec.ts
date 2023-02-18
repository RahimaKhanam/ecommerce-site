import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedCardComponent } from './recently-viewed-card.component';

describe('RecentlyViewedCardComponent', () => {
  let component: RecentlyViewedCardComponent;
  let fixture: ComponentFixture<RecentlyViewedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyViewedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyViewedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
