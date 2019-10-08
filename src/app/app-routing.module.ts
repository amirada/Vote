import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutComponent } from './navbar/ajout/ajout.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegistreComponent } from './navbar/registre/registre.component';
import { ListeComponent } from './navbar/liste/liste.component';
import { LogoutComponent } from './navbar/logout/logout.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { 
    path:'registre',component:RegistreComponent },
    {path:'login',component:LoginComponent},
    {path:'ajout',component:AjoutComponent,canActivate:[AuthGuard]},
    
    {path:'liste',component:ListeComponent,canActivate:[AuthGuard]},
    {path:'logout',component:LogoutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
