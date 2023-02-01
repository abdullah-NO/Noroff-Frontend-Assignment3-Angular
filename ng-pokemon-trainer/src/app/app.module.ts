import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { AppRoutingModule } from './app-routing.module';
import { Pokemon } from './components/pokemon/pokemon.component';
import { HttpClientModule } from "@angular/common/http";
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({ //components
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CataloguePage,
    Pokemon,
    PokemonListComponent,
    LoginFormComponent
  ],
  imports: [// modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
