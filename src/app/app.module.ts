import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TictactoeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
