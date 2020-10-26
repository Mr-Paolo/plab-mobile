import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http : HttpClient) { }


  get(pokemonName){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  }
}
