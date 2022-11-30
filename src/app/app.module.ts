import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContenidoComponent } from './layout/contenido/contenido.component';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
