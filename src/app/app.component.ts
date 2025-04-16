import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl('Tony'),
    password: new FormControl('3000'),
    email: new FormControl(),
  });

  onSubmit() {
    console.log('Submit func called');
    console.log(this.profileForm.value);
  }

  setValue(){
    this.profileForm.setValue({
      name: 'peter',
      password: '2010',
      email: 'may@ben.com',
    })
  }
}
