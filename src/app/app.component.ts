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
  handleClickEvent() {
    console.log('Function called by click');
    this.otherFunction();
  }

  otherFunction() {
    console.log('other function');
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
}
