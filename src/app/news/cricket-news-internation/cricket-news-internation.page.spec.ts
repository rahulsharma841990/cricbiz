import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CricketNewsInternationPage } from './cricket-news-internation.page';

describe('CricketNewsInternationPage', () => {
  let component: CricketNewsInternationPage;
  let fixture: ComponentFixture<CricketNewsInternationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketNewsInternationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CricketNewsInternationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
