import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCatalogueListItemComponent } from './pokemon-catalogue-list-item.component';

describe('PokemonListItemComponent', () => {
  let component: PokemonCatalogueListItemComponent;
  let fixture: ComponentFixture<PokemonCatalogueListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCatalogueListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCatalogueListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
