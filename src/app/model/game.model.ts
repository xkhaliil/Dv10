import { Categorie } from "./categorie.model";
export class Game {
    idGame? : number;
    nomGame? : string;
    prixGame? : number;
    dateCreation? : Date ;
    categorie! : Categorie;
    }