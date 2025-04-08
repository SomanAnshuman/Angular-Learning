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
  name = '';
  displayName = '';
  email = '';

  renderName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    console.log(name);

    this.name = name;
  }
  getName() {
    this.displayName = this.name;
  }
  setName() {
    this.name = 'Sangameshwar';
  }

  getEmail(val: string) {
    console.log(val);

    this.email = val;
  }
  setEmail(){
    this.email = "function@lambda.com"
  }
}
