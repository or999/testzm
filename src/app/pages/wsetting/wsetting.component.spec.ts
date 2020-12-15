import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsettingComponent } from './wsetting.component';

describe('WsettingComponent', () => {
  let component: WsettingComponent;
  let fixture: ComponentFixture<WsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
