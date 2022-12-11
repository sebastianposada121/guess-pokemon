import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlGuessPokemonsService} from "../../../../shared/services/url/guess-pokemons/guess-pokemons.service";

@Injectable({
  providedIn: 'root'
})
export class GuessPokemonsService {

  constructor(
    private httpClient: HttpClient,
    private urlGuessPokemonsService: UrlGuessPokemonsService
  ) { }

  public pokemons(params?: HttpParams): Observable<any>{
    return this.httpClient.get(this.urlGuessPokemonsService.URL.pokemons(), {params});
  }

  public pokemonByName(name: string): Observable<any>{
    return this.httpClient.get(this.urlGuessPokemonsService.URL.pokemonByName(name));
  }
}
