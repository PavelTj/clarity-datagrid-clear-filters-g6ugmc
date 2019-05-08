import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ClarityModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
