import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css'],
})
export class AdminPortalComponent {
  toggle: boolean = true;
  panelOpenState = false;

  toggle_sidebar() {
    this.toggle = !this.toggle;
  }
}
