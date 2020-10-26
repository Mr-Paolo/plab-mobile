import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeClassPageRoutingModule } from './poke-class-routing.module';

import { PokeClassPage } from './poke-class.page';
import { PokeClassListPageComponent } from './poke-class-list-page/poke-class-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeClassPageRoutingModule
  ],
  declarations: [PokeClassPage, PokeClassListPageComponent]
})
export class PokeClassPageModule {}
