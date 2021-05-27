import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListStatistiqueComponent } from './list-statistique/list-statistique.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [AppComponent, StatistiqueComponent, ListStatistiqueComponent, FormulaireComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
