import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNavComponent } from './ion-nav.component';

describe('IonNavComponent', () => {
  let component: IonNavComponent;
  let fixture: ComponentFixture<IonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
