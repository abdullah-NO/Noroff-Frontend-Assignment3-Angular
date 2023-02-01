import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonResults } from 'src/app/models/PokemonResults';
import { environment } from 'src/environments/environment.development';

const { apiPokemons } = environment // = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemon_list:Pokemon[] = []
  private _error: string = ""
  private _loading: boolean = false;

  get pokemon(): Pokemon[] {
    return this._pokemon_list
  }

  get error(): string {
    return this._error
  }

  get loading(): boolean {
    return this._loading
  }

  constructor(private readonly http: HttpClient) {}
  
  public findPokemon(): void {
    this._loading = true;
    this.http.get<PokemonResults>(apiPokemons + "?limit=10&offset=0").pipe(finalize(() => {this._loading = false})).subscribe({
      next: (pokemon_list:PokemonResults) => {
        this._pokemon_list = pokemon_list.results;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message
      }
    })
  }
}
