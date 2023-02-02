//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { Pokemon } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { CollectPokemonButtonComponent } from './components/collect-pokemon-button/collect-pokemon-button.component';

@NgModule({
  //components
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CataloguePage,
    Pokemon,
    PokemonListComponent,
    LoginFormComponent,
    PokemonListItemComponent,
    CollectPokemonButtonComponent,
  ],
  imports: [
    // modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
