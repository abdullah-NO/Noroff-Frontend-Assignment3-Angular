import { TestBed } from '@angular/core/testing';

import { PokemonCollectionService } from './pokemon-collection.service';

describe('PokemonCollectionService', () => {
  let service: PokemonCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
