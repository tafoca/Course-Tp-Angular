import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { TacheComponent } from './tache/tache.component';

@NgModule({
  declarations: [
    AppComponent,
    CompFirstComponent,
    TacheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
