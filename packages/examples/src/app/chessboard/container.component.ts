import { Component } from '@angular/core';

@Component({
    selector: 'app-chess-container',
    template: `
    <app-example-link path="chessboard"></app-example-link>
    <div class="container">
        <app-board></app-board>
    </div>
    `, styles: [`
    .container { 
        width: 560px;
        height: 560px;
    }
    `]
})
export class ContainerComponent {
}