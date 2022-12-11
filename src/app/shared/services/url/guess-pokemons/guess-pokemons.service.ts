import {Inject, Injectable} from '@angular/core';
import {GuessPokemonModel} from "../../../models/url/guess-pokemons.model";

@Injectable({
  providedIn: 'root'
})
export class UrlGuessPokemonsService {
  public url!: string;
  public apiVersion!: string;

  constructor(
    @Inject('URL') url: string,
    @Inject('API_VERSION') apiVersion: string,
  ) {
    this.url = url;
    this.apiVersion = apiVersion;
  }

  public URL: GuessPokemonModel = {
    pokemons: () => `${this.url}/${this.apiVersion}/pokemon`,
    pokemonByName: (name: string) => `${this.url}/${this.apiVersion}/pokemon/${name}`
  }
}
