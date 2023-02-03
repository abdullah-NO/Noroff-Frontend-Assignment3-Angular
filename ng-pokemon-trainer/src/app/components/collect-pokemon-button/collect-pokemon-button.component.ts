import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';

@Component({
  selector: 'app-collect-pokemon-button',
  templateUrl: './collect-pokemon-button.component.html',
  styleUrls: ['./collect-pokemon-button.component.css'],
})
export class CollectPokemonButtonComponent {
  @Input() pokemonName: string = '';

  get loading(): boolean {
    return this.pokemonCollectionService.loading;
  }

  constructor(
    private readonly pokemonCollectionService: PokemonCollectionService
  ) {}

  onCollectClick(): void {
    // Disable button

    // Add pokemon to Trainer API and to sessionStorage
    this.pokemonCollectionService.addPokemon(this.pokemonName).subscribe({
      next: (trainer: Trainer) => {},
      error: (error: HttpErrorResponse) => {
        console.error('Error: ', error.message);
      },
    });
    // Change image of list item
  }
}
