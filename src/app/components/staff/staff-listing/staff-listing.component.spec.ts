import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListingComponent } from './staff-listing.component';

describe('StaffListingComponent', () => {
  let component: StaffListingComponent;
  let fixture: ComponentFixture<StaffListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffListingComponent]
    });
    fixture = TestBed.createComponent(StaffListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
