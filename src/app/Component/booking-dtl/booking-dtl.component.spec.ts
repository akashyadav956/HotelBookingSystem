import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDtlComponent } from './booking-dtl.component';

describe('BookingDtlComponent', () => {
  let component: BookingDtlComponent;
  let fixture: ComponentFixture<BookingDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
