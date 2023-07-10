import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app__practice';
  admin:boolean = true

  button_toggle(){
    this.admin=!this.admin
  }
}
