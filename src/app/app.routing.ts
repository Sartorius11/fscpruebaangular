import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { InicioComponent } from "./components/inicio/inicio.component";
import { MarcasComponent } from "./components/marcas/marcas.component";
const appRoutes: Routes=[
    {path: "", component:InicioComponent },
    {path: "marcas", component: MarcasComponent },

]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
