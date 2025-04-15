import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  color = "black";

  changeColor(color:string){
    this.color = color;
  }
}
