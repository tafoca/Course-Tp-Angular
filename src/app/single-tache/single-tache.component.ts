import { Component, OnInit } from '@angular/core';
import { TacheService } from '../services/tache.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-tache',
  templateUrl: './single-tache.component.html',
  styleUrls: ['./single-tache.component.scss']
})
export class SingleTacheComponent implements OnInit {
  name: string = 'Tache default';
  status: string = 'State';


  constructor(private tacheService:TacheService, private route: ActivatedRoute) { }

  ngOnInit() {
   const id = this.route.snapshot.params['id'];
   this.name = this.tacheService.getTacheById(+id).name;
   this.status = this.tacheService.getTacheById(+id).status;
  }

}
