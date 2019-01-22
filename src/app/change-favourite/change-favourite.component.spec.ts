import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFavouriteComponent } from './change-favourite.component';

describe('ChangeFavouriteComponent', () => {
  let component: ChangeFavouriteComponent;
  let fixture: ComponentFixture<ChangeFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
