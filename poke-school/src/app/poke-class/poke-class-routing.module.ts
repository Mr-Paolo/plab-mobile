import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeClassListPageComponent } from './poke-class-list-page/poke-class-list-page.component';

import { PokeClassPage } from './poke-class.page';

const routes: Routes = [
  {
    path: '',
    component: PokeClassPage
  },
  {
    path: 'list',
    component: PokeClassListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeClassPageRoutingModule {}
