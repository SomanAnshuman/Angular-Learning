import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  students = ['Anil', 'Sam', 'Peter', 'Vinay', 'Bruce'];

  studentsData = [
    { name: 'Anil', age: 29, email: 'anil@test.com' },
    { name: 'Sam', age: 43, email: 'sam@test.com' },
    { name: 'Peter', age: 12, email: 'peter@test.com' },
    { name: 'Bruce', age: 89, email: 'bruce@test.com' },
    { name: 'Tony', age: 65, email: 'tony@test.com' },
  ];
}
