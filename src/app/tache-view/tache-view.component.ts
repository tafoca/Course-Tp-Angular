import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache-view',
  templateUrl: './tache-view.component.html',
  styleUrls: ['./tache-view.component.scss']
})
export class TacheViewComponent implements OnInit {

  //TODO 2: 2ieme type communication: liason par propriete. [sens coponent -> vers le typescript]
  isAuth : boolean;

   //stockage ergonomique en encapsulant dans un tableau d'objet
   taches = [];
   //Le pipe  async  est un cas particulier mais extrêmement utile dans les applications Web, 
   //car il permet de gérer des données asynchrones, par exemple des données que l'application doit récupérer sur un serveur. 
   // pour cette phase nous utilsone le promise pr simuler ce comportemnent
   update_at = new Promise((resolve, reject) => {

    const date = new Date();

    setTimeout(

      () => {

        resolve(date);

      }, 1000

    );

  });
//injection sevice , access global
  constructor(private tacheService:TacheService){
    setTimeout(
      () => {
        this.isAuth =true;
      },4000
    ); //callback anonymous fct with set status of isAuth to true after 4s
  }

  ngOnInit(): void {
    this.taches = this.tacheService.taches;
  }

  onActivateAll(){
    if (confirm("Voulez vous vraiment rendre au status stable toute les taches ? ")) {
      console.log('activation of all tasks same time');
    //code de notre fonction
    this.tacheService.switchOnAll();
    } else {
      return null;
    }
    
  }

  onDisactivateAll(){
    if (confirm("Voulez vous vraiment rendre au status instable toute les taches ? ")) {
      console.log('desactivation of all tasks same time');
    //code de notre fonction
    this.tacheService.switchOffAll();
    } else {
      return null;
    }
    
  }

}
