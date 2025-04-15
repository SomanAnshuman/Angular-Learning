import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    { id: 1, name: 'Soman', age: 22, email: 'soman@test.com' },
    { id: 2, name: 'Peter', age: 43, email: 'peter@test.com' },
    { id: 3, name: 'Mater', age: 12, email: 'mater@test.com' },
    { id: 4, name: 'Bruce', age: 56, email: 'bruce@test.com' },
  ];
}
