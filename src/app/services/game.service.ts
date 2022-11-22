import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { Categorie } from '../model/categorie.model';
@Injectable({
providedIn: 'root'
})
export class GameService {
  games : Game[]; 
  game! : Game;
  categories : Categorie[];
  gamesRecherche! : Game[];
constructor() {
  this.categories = [ {idCat : 1, nomCat : "FPS"},

{idCat : 2, nomCat : "TPS"}];
  this.games = [
    {idGame : 1, nomGame : "Call Of Duty", prixGame : 299, dateCreation : new Date("05/25/2022"), categorie : {idCat : 1, nomCat : "FPS"}},
    {idGame : 2, nomGame : "Elden Ring", prixGame : 200, dateCreation : new Date("07/12/2020"), categorie : {idCat : 2, nomCat : "TPS"}},
    {idGame : 3, nomGame :"Rainbow 6 Siege", prixGame : 120, dateCreation :new Date("09/30/2021"), categorie : {idCat : 3, nomCat : "FPS"}},
    {idGame : 4, nomGame :"Valorant", prixGame : 0, dateCreation : new Date("03/14/2019"), categorie : {idCat : 4, nomCat : "FPS"}},
    
    ];
}
listeGames():Game[] {
return this.games;
}
ajouterGame( game: Game){
this.games.push(game);
}
supprimerGame( Gam: Game){
  const index = this.games.indexOf(Gam, 0);
  if (index > -1) {
  this.games.splice(index, 1);
  }
}
consulterGame(id:number): Game{
  this.game = this.games.find(p => p.idGame == id)!;
  return this.game;
  }
updateGame(p:Game)
{
this.supprimerGame(p);
this.ajouterGame(p);
}
listeCategories():Categorie[] {
  return this.categories;
  }
consulterCategorie(id:number): Categorie{
return this.categories.find(cat => cat.idCat == id)!;
} 
rechercherParCategorie(idCat: number): Game[]{
  this.gamesRecherche =[];
  this.games.forEach((cur, index) => {
   if(idCat == cur.categorie.idCat) {
       console.log("cur "+cur);
      this.gamesRecherche.push(cur);
       }
  });
   return this.gamesRecherche;
  }

}