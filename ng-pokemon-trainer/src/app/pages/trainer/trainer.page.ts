import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { StorageUtil } from 'src/app/utils/storage.util';
import { Trainer } from 'src/app/models/trainer.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage {
  
  get pokemon(): Pokemon[] {
    let sessionTrainer: Trainer = StorageUtil.storageRead("trainer")||{id:-1, username: "", pokemon: []}
    console.log(sessionTrainer)
    return this.pokemonCatalogueService.pokemon
  }

  get loading(): boolean {
    return this.pokemonCatalogueService.loading;
  }

  get error(): string {
    return this.pokemonCatalogueService.error;
  }

  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) {}

  ngOnInit(): void {
    this.pokemonCatalogueService.findPokemonAndSetImage(150, 0);
  }
}
