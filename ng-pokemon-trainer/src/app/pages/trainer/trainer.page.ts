import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { StorageUtil } from 'src/app/utils/storage.util';
import { Trainer } from 'src/app/models/trainer.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage {
  
  get pokemon(): Pokemon[] {
    let sessionTrainer: Trainer = StorageUtil.sessionStorageRead<Trainer>("trainer")||{id:-1, username: "", pokemon: []}
    let pokemonCatalogue: Pokemon[] = StorageUtil.sessionStorageRead<Pokemon[]>("pokemonList")||[]
    return pokemonCatalogue.filter(pokemonInstance => sessionTrainer.pokemon.includes(pokemonInstance.name))
  }

  removeTrainer(){
    StorageUtil.sessionStorageRemove()
  }

  constructor() {}
}
