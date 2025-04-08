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
  color = '';

  handleChangeColor(val:string){
    this.color = val;
  }
  handleInput(event:Event){
    this.color = (event.target as HTMLInputElement).value;
  }
}
