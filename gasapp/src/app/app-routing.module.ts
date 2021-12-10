import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraLikeListComponent } from './components/gasolinera-like-list/gasolinera-like-list.component';
import { GasolineraLikeComponent } from './components/gasolinera-like/gasolinera-like.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'gasolineras', component: GasolineraListComponent },
  { path: 'gasolineraslike', component: GasolineraLikeListComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
