import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketComponent,
    HeaderComponent,
    TicketInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
