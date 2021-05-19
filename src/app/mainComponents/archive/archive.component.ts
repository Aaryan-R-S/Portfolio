import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Archive | Aaryan Raj Saxena");
  }

  ngOnInit(): void {
  }

}
