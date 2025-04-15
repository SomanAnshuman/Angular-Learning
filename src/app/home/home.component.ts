import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  goToProfile(name: string) {
    this.router.navigate(['profile'], { queryParams: { name: name } });
  }
}
