import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TacheService } from '../services/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.scss']
})
export class EditTacheComponent implements OnInit {
  defaultStatus ='instable';
  constructor(private tacheService:TacheService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    //console.log(f.value);// object f
    //traitement data recieve
    const name = f.value['name'];
    const status = f.value['status'];
    this.tacheService.addTache(name,status);
    this.router.navigate(['/taches']);
  }

}
