import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.None
})
export class Card {
  // @ts-ignore
  plano: any = {
    infos: undefined,
  };
}
