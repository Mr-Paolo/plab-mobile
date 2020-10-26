import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemon
  pokemonForm : FormGroup

  constructor(private activatedRoute: ActivatedRoute, private pokemonService : PokemonService) { }

  ngOnInit() {
    const pokemonName = this.activatedRoute.snapshot.paramMap.get('name')
    
    this.pokemonForm = new FormGroup({
      name: new FormControl(null)
    })

    this.pokemonService.get(pokemonName)
      .subscribe(data => this.pokemon = data)
  }

}
