import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductosComponent } from './shop/productos/productos.component';
import { LayoutTiendaComponent } from './shop/layout-tienda/layout-tienda.component';
import { CarritoComponent } from './shop/carrito/carrito.component';
import { CultivoComponent } from './mi-jardin/cultivo/cultivo.component';
import { JardinComponent } from './mi-jardin/jardin/jardin.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsejoComponent } from './consejo/consejo.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { MiCuentaComponent } from './auth/mi-cuenta/mi-cuenta.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ConvertDaysToPipe } from './pipes/convert-days-to.pipe';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'cultivos', component:CultivoComponent},
  {path:'consejo', component:ConsejoComponent},
  {path:'tienda', component:LayoutTiendaComponent},
  {path:'jardin', component:JardinComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'micuenta', component:MiCuentaComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductosComponent,
    LayoutTiendaComponent,
    CarritoComponent,
    CultivoComponent,
    JardinComponent,
    ConsejoComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    MiCuentaComponent,
    FilterPipe,
    ConvertDaysToPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
