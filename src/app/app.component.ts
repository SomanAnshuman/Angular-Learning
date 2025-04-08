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
  users = ['Anil', 'Vivek', 'Sidhu', 'Aman'];
  students = [
    { name: 'Anil', age: 29, email: 'anil@test.com' },
    { name: 'Tony', age: 31, email: 'tony@test.com' },
    { name: 'Peter', age: 92, email: 'peter@test.com' },
    { name: 'Bruce', age: 25, email: 'bruce@test.com' },
  ];

  getName(val:string){
    console.log(val);
  }
}
