import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  color = 1;

  handleChangeColor(val:number){
    this.color = val;
  }
  handleInput(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
