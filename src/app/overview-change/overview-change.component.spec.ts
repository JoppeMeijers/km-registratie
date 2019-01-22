import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChangeComponent } from './overview-change.component';

describe('OverviewChangeComponent', () => {
  let component: OverviewChangeComponent;
  let fixture: ComponentFixture<OverviewChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
