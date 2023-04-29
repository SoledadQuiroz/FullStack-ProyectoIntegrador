import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductosComponent } from './shop/productos/productos.component';
import { PortadaComponent } from './shop/portada/portada.component';
import { LayoutTiendaComponent } from './shop/layout-tienda/layout-tienda.component';
import { BuscadorComponent } from './shop/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductosComponent,
    PortadaComponent,
    LayoutTiendaComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
