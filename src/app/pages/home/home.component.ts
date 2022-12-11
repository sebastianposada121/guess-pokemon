import {Component, OnInit} from '@angular/core';
import {Constants} from "../../shared/assets/global/constants";
import {GuessPokemonsService} from "./services/guess-pokemons/guess-pokemons.service";
import {HttpParams} from "@angular/common/http";
import {ResponseModel} from "../../shared/models/pokemon/response.model";
import {PokemonModel} from "../../shared/models/pokemon/pokemon.model";
import {GeneralAttributesModel} from "../../shared/models/pokemon/generic.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public score!: number;
  public pokemons!: Array<GeneralAttributesModel>;
  public limit!: number;
  public guessPokemon!: PokemonModel;
  public name!: string;
  public logo!: string;
  public showAlert!: boolean;
  public errorGuess!: boolean;

  constructor(
    private guessPokemonsService: GuessPokemonsService
  ) {
    this.limit = 500;
    this.score = 0;
    this.logo = Constants.icons.LOGO;
  }

  /**
   *
   */
  public getAllPokemons(): void{
    const params = new HttpParams().append('limit', this.limit);
    this.guessPokemonsService.pokemons(params).subscribe((response: ResponseModel) => {
      this.pokemons = response?.results;
      if(this.pokemons.length < response?.count){
        this.limit += this.limit;
        this.getAllPokemons();
      }else{
        this.setRandomPokemon();
      }
    });
  }

  /**
   *
   */
  public setRandomPokemon(): void{
    const random: number = Math.floor(Math.random() * (this.pokemons?.length - 1) + 1);
    const randomPokemon = this.pokemons[random];
    this.guessPokemonsService.pokemonByName(randomPokemon.name).subscribe((response: PokemonModel) => {
      this.guessPokemon = response;
    });
  }

  public guessPokemonByName(): void{
    this.setRandomPokemon();
    this.showAlert = true;
    if(this.guessPokemon.name === this.name){
      this.score += 10;
      this.errorGuess = false;
    }else{
      this.errorGuess = true;
      if(this.score > 0){
        this.score -= 10;
      }
    }
    setTimeout(() => this.showAlert, 5000);
  }

  ngOnInit() {
    this.getAllPokemons();
  }
}
