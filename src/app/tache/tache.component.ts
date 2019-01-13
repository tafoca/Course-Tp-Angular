import { Component, OnInit, Input } from '@angular/core';

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
 
  constructor() { }

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


}
