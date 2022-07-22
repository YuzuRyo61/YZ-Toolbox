import { Component } from '@angular/core';
import { getName } from '@tauri-apps/api/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drawerMenu = false;
  name = getName();
}
