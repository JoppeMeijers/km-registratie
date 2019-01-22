import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRideComponent } from './control-ride.component';

describe('ControlRideComponent', () => {
  let component: ControlRideComponent;
  let fixture: ComponentFixture<ControlRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
