import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PokemonPage } from './pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
