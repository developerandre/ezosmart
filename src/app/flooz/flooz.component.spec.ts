import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloozComponent } from './flooz.component';

describe('FloozComponent', () => {
  let component: FloozComponent;
  let fixture: ComponentFixture<FloozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
