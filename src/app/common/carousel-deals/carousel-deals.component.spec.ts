import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDealsComponent } from './carousel-deals.component';

describe('CarouselDealsComponent', () => {
  let component: CarouselDealsComponent;
  let fixture: ComponentFixture<CarouselDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
