import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPortalComponent } from './public-portal.component';

describe('PublicPortalComponent', () => {
  let component: PublicPortalComponent;
  let fixture: ComponentFixture<PublicPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicPortalComponent]
    });
    fixture = TestBed.createComponent(PublicPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
