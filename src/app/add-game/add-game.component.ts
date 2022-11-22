import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  newGame = new Game();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private gameService: GameService,private router :Router) { }

  ngOnInit(): void {
    this.categories = this.gameService.listeCategories();
  }
  addGame(){
    //console.log(this.newGame);
    this.newCategorie =
    this.gameService.consulterCategorie(this.newIdCat);
    this.newGame.categorie = this.newCategorie;
    this.gameService.ajouterGame(this.newGame);
    this.router.navigate(['games']);
    }
}
