import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutComponent } from './navbar/ajout/ajout.component';
import { ListeComponent } from './navbar/liste/liste.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegistreComponent } from './navbar/registre/registre.component';
import { LogoutComponent } from './navbar/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AjoutComponent,
    ListeComponent,
    
    LoginComponent,
    RegistreComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
