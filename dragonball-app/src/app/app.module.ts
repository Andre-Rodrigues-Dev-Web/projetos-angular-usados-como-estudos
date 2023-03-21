import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuerreirosZComponent } from './guerreiros-z/guerreiros-z.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
{MenuComponent}
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animes', component: GuerreirosZComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    GuerreirosZComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
