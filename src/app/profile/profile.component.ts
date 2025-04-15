import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  userName: string | null = '';
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    // this.userName = this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);

    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];//this data is received from home component
    });

    this.route.data.subscribe(data => {
      this.userName = data['name'];//this data is received straight from routes
    })
  }
}
