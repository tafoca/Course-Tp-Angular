import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//TODO 4: import 3st form of communicayion in 2 sens :two ways binding
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { TacheComponent } from './tache/tache.component';
import { TacheService } from './services/tache.service';

@NgModule({
  declarations: [
    AppComponent,
    CompFirstComponent,
    TacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
