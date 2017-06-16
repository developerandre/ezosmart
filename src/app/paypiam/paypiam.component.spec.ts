import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypiamComponent } from './paypiam.component';

describe('PaypiamComponent', () => {
  let component: PaypiamComponent;
  let fixture: ComponentFixture<PaypiamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypiamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypiamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
