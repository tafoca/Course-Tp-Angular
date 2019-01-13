import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task app';
  //TODO 2: 2ieme type communication: liason par propriete. [sens coponent -> vers le typescript]
  isAuth : boolean;

  //init value of child attribut _tacheName
  tacheNameone = 'task one - 1';
  tacheNametwo = 'task two - 2';
  tacheNamethree = 'task three - 3';
  //-- init value of child attribut _tacheStatus of tacheCopoment
   state1= 'stable';
   state2= 'instatble';
   state3= 'stable';
  constructor(){
    setTimeout(
      () => {
        this.isAuth =true;
      },4000
    ); //callback anonymous fct with set status of isAuth to true after 4s
  }

  onActivateAlle(){
    console.log('activation of all tasks same time');
    //code de notre fonction
  }
}
