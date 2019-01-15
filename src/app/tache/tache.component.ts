import { Component, OnInit, Input } from '@angular/core';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  //mapping dynamique, new property to share with parent component in template
  @Input()
  _tacheName:String;
  @Input()
   _tacheStatus: String;

   @Input()
   index: number; //banding capture de l'index d'un composant vue dans un ensemble
  //injection tacheService 
  constructor(private tacheService: TacheService) {

   }

  ngOnInit() {
  }
  public getTacheName(): String {
    return this._tacheName;
  }
  public setTacheName(value: String) {
    this._tacheName = value;
  }

  public getTacheStatus(): String {
    return this._tacheStatus;
  }
  public setTacheStatus(value: String) {
    this._tacheStatus = value;
  }

  public getColor(): String{
    if(this._tacheStatus == 'stable'){
      return 'green';
    }else if(this._tacheStatus == 'instable'){
      return 'red';
    }
  }

  //method changement status comme un switch booleen ou inverseur d'etat
  public onSwitch(){
    if (this._tacheStatus == 'stable') {
        this.tacheService.switchOffOne(this.index);   
    } else if(this._tacheStatus == 'instable'){
      this.tacheService.switchOnOne(this.index);  
    }
  }

}
