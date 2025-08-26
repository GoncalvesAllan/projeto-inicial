import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './card/card';
import { CardRoxo } from './card-roxo/card-roxo';
import { CardButton } from './card-button/card-button';

@NgModule({
  declarations: [
    App,
    Card,
    CardRoxo,
    CardButton
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { 
  
}
