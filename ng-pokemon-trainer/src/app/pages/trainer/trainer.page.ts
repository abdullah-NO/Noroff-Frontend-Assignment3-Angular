import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonCatalogueService } from 'src/services/pokemon-catalogue.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  get pokemon(): Pokemon[] {
    return this.pokemonCatalogueService.pokemon
  }

  get loading(): boolean {
    return this.pokemonCatalogueService.loading
  }

  get error(): string {
    return this.pokemonCatalogueService.error
  }

  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ){}

  ngOnInit(): void {
    this.pokemonCatalogueService.findPokemon()
  }

}
