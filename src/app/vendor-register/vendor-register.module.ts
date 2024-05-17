import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorRegisterPageRoutingModule } from './vendor-register-routing.module';

import { VendorRegisterPage } from './vendor-register.page';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ErrorsModule } from 'src/shared/errors.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorRegisterPageRoutingModule,
    ReactiveFormsModule,
    ErrorsModule
  ],
  declarations: [VendorRegisterPage ]
})
export class VendorRegisterPageModule {}
