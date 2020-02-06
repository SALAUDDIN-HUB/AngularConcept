import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventdemo1Component } from './eventdemo1.component';

describe('Eventdemo1Component', () => {
  let component: Eventdemo1Component;
  let fixture: ComponentFixture<Eventdemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventdemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
