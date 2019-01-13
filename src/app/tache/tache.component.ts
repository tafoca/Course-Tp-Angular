import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  private _tacheName: String = 'sauvegarder une tache quelconque';


  private _tacheStatus: String = 'stable';
 
  constructor() { }

  ngOnInit() {
  }
  public get tacheName(): String {
    return this._tacheName;
  }
  public set tacheName(value: String) {
    this._tacheName = value;
  }

  public get tacheStatus(): String {
    return this._tacheStatus;
  }
  public set tacheStatus(value: String) {
    this._tacheStatus = value;
  }


}
