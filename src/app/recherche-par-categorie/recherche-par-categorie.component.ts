import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  games!: Game[];
  categories! : Categorie[];
  IdCategorie!: number;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.categories = this.gameService.listeCategories();
    this.games = this.gameService.listeGames();
  }
  onChange() {
    // console.log(this.IdCategorie);
     this.games =  this.gameService.rechercherParCategorie(this.IdCategorie);
     console.log(this.games);
     
     }
     supprimerGame(p: Game)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
{
  this.gameService.supprimerGame(p);
  this.games =  this.gameService.rechercherParCategorie(this.IdCategorie);
  
}
}

}