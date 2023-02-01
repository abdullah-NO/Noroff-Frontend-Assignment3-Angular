import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';

const environment = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

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
    this.http.get<Pokemon[]>(environment).pipe(finalize(() => {this._loading = false})).subscribe({
      next: (pokemon_list:Pokemon[]) => {
        this._pokemon_list = pokemon_list;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message
      }
    })
  }
}
