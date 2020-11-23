import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperrootComponent } from './superroot.component';

describe('SuperrootComponent', () => {
  let component: SuperrootComponent;
  let fixture: ComponentFixture<SuperrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperrootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
