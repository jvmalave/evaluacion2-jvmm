import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiContactoPageRoutingModule } from './mi-contacto-routing.module';

import { MiContactoPage } from './mi-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiContactoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MiContactoPage]
})
export class MiContactoPageModule {}
