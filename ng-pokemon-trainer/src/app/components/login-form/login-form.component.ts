import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import { TrainerSessionStorageService } from 'src/app/services/trainer-session-storage.service';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  private _loading: boolean = false;

  get trainerLoading(): boolean {
    return this._loading;
  }

  get catalogueLoading(): boolean {
    return this.pokemonCatalogueService.loading;
  }

  get notLoading(): boolean {
    return !(this.pokemonCatalogueService.loading || this._loading);
  }

  @Output() login: EventEmitter<void> = new EventEmitter();

  //DI Dependecy injection
  constructor(
    private readonly trainerService: TrainerSessionStorageService,
    private readonly loginService: LoginService,
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) {}
  public loginSubmit(loginForm: NgForm): void {
    this._loading = true;
    //get username
    const { username } = loginForm.value;
    this.loginService.login(username).subscribe({
      next: (trainer: Trainer) => {
        // redirect to catalogue page.
        this.trainerService.trainer = trainer;
        // pokemon catalogue service is being given to session storage once on login.
        this.pokemonCatalogueService.findPokemonAndSetImage(150, 0);

        this.login.emit();
        this._loading = false;
      },
      error: () => {
        // handles it locally
      },
    });
  }
}
