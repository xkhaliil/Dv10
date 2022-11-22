import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../model/game.model';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styles: [
  ]
})
export class UpdateGameComponent implements OnInit {
  currentGame = new Game();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService) { }

    ngOnInit(): void {
      this.categories = this.gameService.listeCategories();
      this.currentGame =
      this.gameService.consulterGame(this.activatedRoute.snapshot.params['id']);
      this.updatedCatId=this.currentGame.categorie.idCat;
    }
    updateGame() {
      this.currentGame.categorie=this.gameService.consulterCategorie(this.updatedCatId);
      this.gameService.updateGame(this.currentGame);
      this.router.navigate(['games']);
      }
    }
