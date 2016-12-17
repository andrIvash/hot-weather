/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AreaPointsComponent } from './area-points.component';

describe('AreaPointsComponent', () => {
  let component: AreaPointsComponent;
  let fixture: ComponentFixture<AreaPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
