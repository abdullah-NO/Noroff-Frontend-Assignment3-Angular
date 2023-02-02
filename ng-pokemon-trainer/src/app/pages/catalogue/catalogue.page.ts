import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css'],
})
export class CataloguePage {
  get pokemonList(): Pokemon[] | undefined {
    return StorageUtil.storageRead<Pokemon[]>('pokemonList');
  }
}
