import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegistrationComponent } from './login-and-registration.component';

describe('LoginAndRegistrationComponent', () => {
  let component: LoginAndRegistrationComponent;
  let fixture: ComponentFixture<LoginAndRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAndRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
