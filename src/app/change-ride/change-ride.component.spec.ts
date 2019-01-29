import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRideComponent } from './change-ride.component';

describe('ChangeRideComponent', () => {
  let component: ChangeRideComponent;
  let fixture: ComponentFixture<ChangeRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
