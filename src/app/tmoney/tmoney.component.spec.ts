import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoneyComponent } from './tmoney.component';

describe('TmoneyComponent', () => {
  let component: TmoneyComponent;
  let fixture: ComponentFixture<TmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
