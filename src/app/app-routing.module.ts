import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GameGuard } from './game.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
const routes: Routes = [
  { path: "games", component: GamesComponent },
  { path: "add-game", component: AddGameComponent, canActivate: [GameGuard] },
  { path: "updateGame/:id", component: UpdateGameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: "", redirectTo: "games", pathMatch: "full" },
  { path: "rechercheParCategorie", component: RechercheParCategorieComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
