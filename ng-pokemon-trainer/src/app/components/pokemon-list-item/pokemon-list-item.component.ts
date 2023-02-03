import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent {
  @Input() pokemon?: Pokemon;

  collected(): Boolean {
    const trainer = StorageUtil.sessionStorageRead<Trainer>('trainer');
    return Boolean(
      trainer?.pokemon.find((pokemonName) => pokemonName === this.pokemon?.name)
    );
  }
}
