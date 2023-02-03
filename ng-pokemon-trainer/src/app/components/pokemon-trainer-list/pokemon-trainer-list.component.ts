import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCollectionService } from 'src/app/services/pokemon-collection.service';

@Component({
  selector: 'app-pokemon-trainer-list',
  templateUrl: './pokemon-trainer-list.component.html',
  styleUrls: ['./pokemon-trainer-list.component.css'],
})
export class PokemonTrainerListComponent {
  @Input() pokemon: Pokemon[] = []; //collection

  constructor(
    private readonly pokemonCollectionService: PokemonCollectionService
  ) {}

  onReleasePokemon(pokemon: Pokemon): void {
    // Remove pokemon from Trainer API and from sessionStorage
    this.pokemonCollectionService.removePokemon(pokemon).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error('Error: ', error.message);
      },
    });
  }
}
