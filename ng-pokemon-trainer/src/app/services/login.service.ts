import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';

const { apiUsers, apiUsersKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  // Models, HttpClient, Observables, and RxJS operators.
  public login(username: string): Observable<Trainer> {
    return this.checkTrainerName(username).pipe(
      switchMap((trainer: Trainer | undefined) => {
        if (trainer === undefined) {
          return this.createTrainer(username);
        }
        return of(trainer);
      })
    );
  }
  //Login

  // Check if user exists
  private checkTrainerName(username: string): Observable<Trainer | undefined> {
    return this.http
      .get<Trainer[]>(`${apiUsers}?username=${username}`)
      .pipe(map((response: Trainer[]) => response.pop()));
  }

  // IF NOT user -create User
  private createTrainer(username: string): Observable<Trainer> {
    const trainer = {
      username,
      pokemon: [],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiUsersKey,
    });

    // Post - Create items on the server
    return this.http.post<Trainer>(apiUsers, trainer, { headers });
  } // IF User || Created User -> Store user
}
