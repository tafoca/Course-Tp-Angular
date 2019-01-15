import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//TODO 4: import 3st form of communicayion in 2 sens :two ways binding
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CompFirstComponent } from './comp-first/comp-first.component';
import { TacheComponent } from './tache/tache.component';
import { TacheService } from './services/tache.service';
import { AuthComponent } from './auth/auth.component';
import { TacheViewComponent } from './tache-view/tache-view.component';

import { RouterModule, Routes } from '@angular/router';
import { SingleTacheComponent } from './single-tache/single-tache.component';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: 'taches', component: TacheViewComponent },
  { path: '', component: TacheViewComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'taches/:id',component:SingleTacheComponent}
];

//export const appRouting = RouterModule.forRoot(appRoutes);
@NgModule({
  declarations: [
    AppComponent,
    CompFirstComponent,
    TacheComponent,
    AuthComponent,
    TacheViewComponent,
    SingleTacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TacheService,
    AuthService //very important import servicice in provider else cll/inject is produise an error
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
