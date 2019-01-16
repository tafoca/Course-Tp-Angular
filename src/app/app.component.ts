import { Component, OnInit, OnDestroy } from '@angular/core';
import { TacheService } from './services/tache.service';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes: number;
  counterSubscription: Subscription;

  title = 'Task Board';
  constructor(){}
  
  ngOnInit(): void {
   //creation obsavable 
    const counter =  interval(10000);
    this.counterSubscription =  counter.subscribe(
      //la première se déclenche à chaque fois que l'Observable émet de nouvelles données, 
      //et reçoit ces données comme argument ;
      (value) => {
        this.secondes = value*10;
      },
      //la deuxième se déclenche si l'Observable émet une erreur, et reçoit cette erreur comme argument ;
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
     // la troisième se déclenche si l'Observable s'achève, et ne reçoit pas d'argument.
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
   this.counterSubscription.unsubscribe; //declanche a la destruction du composant
  }

}
