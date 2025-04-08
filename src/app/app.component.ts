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
  handleEvent(event: Event) {
    console.log('function called', event.type);
    // console.log("function called", event);
    // console.log("function called", (event.target as Element).classList);
    
    if (event.type === 'input')
      console.log('value', (event.target as HTMLInputElement).value);
  }
}
