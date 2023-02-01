import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonResponse } from 'src/app/models/PokemonResponse';
import { environment } from 'src/environments/environment';

const { apiPokemons, apiPokemonImages } = environment; // = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  private _pokemon_list: Pokemon[] = [];
  private _error: string = '';
  private _loading: boolean = false;

  get pokemon(): Pokemon[] {
    return this._pokemon_list;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) {}

  public findPokemonAndTheirImage(limit: number, offset: number): void {
    this._loading = true;
    this.http
      .get<PokemonResponse>(apiPokemons + `?limit=${limit}&offset=${offset}`)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemon_list: PokemonResponse) => {
          this._pokemon_list = pokemon_list.results;

          // fetch image
          this._pokemon_list.forEach((pokemon) => {
            const id = pokemon.url.split('/').slice(-2, -1).pop();
            pokemon.img = `${apiPokemonImages + id}.png`;
          });
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        },
      });
  }
}
