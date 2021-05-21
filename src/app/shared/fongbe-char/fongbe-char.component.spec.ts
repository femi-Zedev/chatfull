import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FongbeCharComponent } from './fongbe-char.component';

describe('FongbeCharComponent', () => {
  let component: FongbeCharComponent;
  let fixture: ComponentFixture<FongbeCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FongbeCharComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FongbeCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
