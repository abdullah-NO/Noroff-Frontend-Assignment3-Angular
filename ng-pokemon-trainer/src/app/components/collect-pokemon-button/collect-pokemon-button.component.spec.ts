import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectPokemonButtonComponent } from './collect-pokemon-button.component';

describe('AddPokemonButtonComponent', () => {
  let component: CollectPokemonButtonComponent;
  let fixture: ComponentFixture<CollectPokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectPokemonButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectPokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
