import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();

  //DI Dependecy injection
  constructor(
    private readonly trainerService: TrainerService,
    private readonly loginService: LoginService,
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) {}
  public loginSubmit(loginForm: NgForm): void {
    //get username
    const { username } = loginForm.value;

    this.loginService.login(username).subscribe({
      next: (trainer: Trainer) => {
        // redirect to catalogue page.
        this.trainerService.trainer = trainer;
        // pokemon catalogue service is being given to session storage once on login.
        this.pokemonCatalogueService.findPokemonAndSetImage(10, 0);

        this.login.emit();
      },
      error: () => {
        // handles it locally
      },
    });
  }
}
