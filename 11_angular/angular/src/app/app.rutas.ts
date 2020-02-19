//Es una envoltura alrededor de un módulo que incluye también los proveedores.
import {ModuleWithProviders} from '@angular/core';

// El router angular es un servicio opcional que presenta una vista de componente particular para un determinado URL. No es parte del núcleo angular. Es en su propio paquete de biblioteca, @angular/router. lo que necesita de ella. 
import {Routes, RouterModule} from '@angular/router';

//Importamos los Componentes
import { IndexComponente } from './componentes/index';
import {ApiComponente} from "./componentes/api";

// La constante appRoutes es un conjunto de rutas donde se describe a donde a donde nos vamos a desplazar dentro de la aplicación
const appRoutes: Routes = [
    {path: "", component: IndexComponente},
    {path: "index", component: IndexComponente},
    {path: "api", component: ApiComponente},
    {path: "**", component: IndexComponente}
];

//Exportamos una variable constante llamada appRoutingProviders que va ser un Array con objetos de cualquier tipo
export const appRoutingProviders: any[] = [];
// Exportamos otra variable constante llamada routing de tipo ModuleWithProviders con el valor del objeto RouterModule utilizando el método forRoot con el parámetro de la ruta que nosotros indicamos en el appRoutes 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);