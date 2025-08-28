import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './card/card';
import { CardRoxo } from './card-roxo/card-roxo';
import { CardButton } from './card-button/card-button';

@NgModule({
  declarations: [
    Card,
    CardRoxo,
    CardButton
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Card,
    CardRoxo,
    CardButton  
  ]
})
export class CardsModule { }
