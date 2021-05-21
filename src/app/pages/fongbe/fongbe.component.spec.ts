import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FongbeComponent } from './fongbe.component';

describe('FongbeComponent', () => {
  let component: FongbeComponent;
  let fixture: ComponentFixture<FongbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FongbeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FongbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
