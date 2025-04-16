import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = new FormControl('soman');
  password = new FormControl('123');

  displayValue() {
    console.log(this.name.value, this.password.value);
  }

  setValues() {
    this.name.setValue('Peter');
    this.password.setValue('3000');
  }
}
