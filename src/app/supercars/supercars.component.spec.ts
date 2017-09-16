import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercarsComponent } from './supercars.component';

describe('SupercarsComponent', () => {
  let component: SupercarsComponent;
  let fixture: ComponentFixture<SupercarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
