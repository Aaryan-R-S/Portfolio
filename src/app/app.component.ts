import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* *************************** All Event handling and Javascript here  ***************************** */
export class AppComponent {
  title = 'ars-portfolio';
  constructor(private titleService:Title) {
    this.titleService.setTitle("Aaryan Raj Saxena");
  }
}
