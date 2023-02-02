import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  constructor(
    private readonly router: Router,
    private readonly pokemonCatalogueService: PokemonCatalogueService
    ) {}

  handleLogin(): void {
    this.router.navigateByUrl('/catalogue');
  }

  get loading(): boolean {
    return this.pokemonCatalogueService.loading;
  }
}
