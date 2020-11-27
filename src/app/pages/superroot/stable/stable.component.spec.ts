import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableComponent } from './stable.component';

describe('StableComponent', () => {
  let component: StableComponent;
  let fixture: ComponentFixture<StableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
