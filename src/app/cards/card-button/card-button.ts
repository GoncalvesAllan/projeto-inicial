import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  //templateUrl: './card-button.html',
  //styleUrl: './card-button.scss',
  styles: [`
    .card-button{
      font-size: 15px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: white;
      cursor: pointer;
      padding: 10px;
      font-weight: bold;
    }
  `],
  template: `
    <div class="card-button">Adquirir</div> 
  `,
})
export class CardButton {

}
