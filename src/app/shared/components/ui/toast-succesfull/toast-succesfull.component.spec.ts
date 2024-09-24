import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastSuccesfullComponent } from './toast-succesfull.component';

describe('ToastSuccesfullComponent', () => {
  let component: ToastSuccesfullComponent;
  let fixture: ComponentFixture<ToastSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastSuccesfullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
