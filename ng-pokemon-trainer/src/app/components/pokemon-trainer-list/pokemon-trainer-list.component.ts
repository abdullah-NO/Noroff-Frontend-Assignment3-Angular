import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-trainer-list',
  templateUrl: './pokemon-trainer-list.component.html',
  styleUrls: ['./pokemon-trainer-list.component.css'],
})
export class PokemonTrainerListComponent implements OnInit {
  @Input() pokemon: Pokemon[] = [];

  constructor() {}

  onReleasePokemon(){
    alert('Button working')
  }

  ngOnInit(): void {}
}
