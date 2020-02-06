import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDemoComponent } from './assignment-demo.component';

describe('AssignmentDemoComponent', () => {
  let component: AssignmentDemoComponent;
  let fixture: ComponentFixture<AssignmentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
