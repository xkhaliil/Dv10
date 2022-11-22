import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { UpdateGameComponent } from './update-game/update-game.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AddGameComponent,
    UpdateGameComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
