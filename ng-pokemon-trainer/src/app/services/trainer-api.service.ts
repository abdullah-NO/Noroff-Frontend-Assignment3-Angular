import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

const { apiUsers, apiUsersKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class TrainerApiService {
  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) {}

  public addPokemon(name: string): Observable<Trainer> {
    const user = StorageUtil.sessionStorageRead<Trainer>('trainer');
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
}
