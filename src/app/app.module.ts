import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';


import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { CuboSevice } from './services/cubo.services';
import { InicioComponent } from './components/inicio/inicio.component';
import { MarcasComponent } from './components/marcas/marcas.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    MarcasComponent,
   
   
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,routing
  ],
  providers: [appRoutingProviders,CuboSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
