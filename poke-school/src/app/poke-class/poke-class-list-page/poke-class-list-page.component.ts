import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-poke-class-list-page',
  templateUrl: './poke-class-list-page.component.html',
  styleUrls: ['./poke-class-list-page.component.scss'],
})
export class PokeClassListPageComponent implements OnInit {
  type 
  typeId: string

  constructor(private activatedRoute : ActivatedRoute, private typeService : TypeService) { }

  ngOnInit() {
    this.typeId = this.activatedRoute.snapshot.paramMap.get('type')

    this.typeService.get(this.typeId)
      .subscribe((data) => this.type = data )
  }

  printThumbUrl(pokemon){
    const urlSplit = pokemon.url.split("/")
    const pokeId = urlSplit[urlSplit.length-2]
    console.log(pokeId)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
  }

  getBackButtonText() {

    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? `${this.typeId} class` : '';
  }

}
