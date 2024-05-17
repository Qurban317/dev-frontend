import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VendorRegisterPage } from './vendor-register.page';

/* describe('VendorRegisterPage', () => {
  let component: VendorRegisterPage;
  let fixture: ComponentFixture<VendorRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */




describe('VendorRegisterPage', () => {
  let component: VendorRegisterPage;
  let fixture: ComponentFixture<VendorRegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorRegisterPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
