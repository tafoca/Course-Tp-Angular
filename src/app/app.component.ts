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
