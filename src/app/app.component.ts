import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularIntro';
  name = 'nisha'
  getName() {
    return this.name
  }

  obj = {
    name: "Nisha kant",
    age: 25
  }
  a = 100;
  b = 200;
  c= 300;
}
