import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

const { apiUsers, apiUsersKey } = environment;
const user = StorageUtil.sessionStorageRead<Trainer>('trainer');

@Injectable({
  providedIn: 'root',
})
export class PokemonCollectionService {
  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) {}

  public addPokemon(name: string): Observable<Trainer> {
    // Add pokemon to Trainer API and to sessionStorage

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiUsersKey,
    });

    if (user === undefined) {
      throw new Error('addPokemon: Trainer not found.');
    } else {
      this._loading = true;
      return this.http
        .patch<Trainer>(
          apiUsers + `/` + user.id,
          {
            pokemon: [...user.pokemon, name],
          },
          { headers }
        )
        .pipe(
          tap((updatedTrainer: Trainer) => {
            // Add pokemon to sessionStorage
            StorageUtil.sessionStorageSave<Trainer>('trainer', updatedTrainer);
          }),
          finalize(() => (this._loading = false))
        );
    }
  }

  public removePokemon(pokemon: Pokemon): Observable<Trainer> {
    // Remove pokemon from Trainer API and from sessionStorage

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiUsersKey,
    });

    if (user === undefined) {
      throw new Error('removePokemon: Trainer not found.');
    } else {
      this._loading = true;
      return this.http
        .patch<Trainer>(
          apiUsers + `/` + user.id,
          {
            pokemon: user.pokemon.filter(
              (pokemonName) => pokemonName !== pokemon.name
            ),
          },
          { headers }
        )
        .pipe(
          tap((updatedTrainer: Trainer) => {
            // Remove pokemon from sessionStorage
            StorageUtil.sessionStorageSave<Trainer>('trainer', updatedTrainer);
          }),
          finalize(() => (this._loading = false))
        );
    }
  }
}
