import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgPathAbout:string;
  constructor() { 
    this.imgPathAbout = "assets/images/me.png"

  }

  ngOnInit(): void {
  }

}
