import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeSignupPage } from './home-signup.page';

describe('HomeSignupPage', () => {
  let component: HomeSignupPage;
  let fixture: ComponentFixture<HomeSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
