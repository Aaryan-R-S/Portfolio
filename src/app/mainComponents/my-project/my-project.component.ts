import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from 'src/app/ProjectDetails';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {
  topProjectArr:ProjectDetails[];
  constructor() {
    this.topProjectArr = [
      {
        year:2020,
        title:"Ping-Pong Game",
        category:"Web Game",
        description:"This is a Ping Pong game developed using JavaScript and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing, multi-player game. It is build using HTML canvas and vector library from the MinuteLabs.io",
        builtWith: ["HTML","Canvas","CSS","JavaScript","Git"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Ping-Pong",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Ping-Pong"
      },
      {
        year:2021,
        title:"How's That",
        category:"Entertainment",
        description:"How's That is a Cricket fantasy team site. Participants can register before the start of cricket match and then see their teams performance on the points table. It is developed using python flask and Cric Api. It is deployed on Heroku using Heroku CLI.",
        builtWith: ["Python","Gspread","JavaScript","Flask","CricApi"],
        projectLink:"https://hows-that-aaryanars.herokuapp.com/",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Hows-That"
      },
      {
        year:2020,
        title:"Postman Clone",
        category:"Web Utility",
        description:"This is a Postman Clone Website developed using JavaScript Fetch API. The user can make a GET or POST by mentioning request type and giving params either in form of JSON or any other custom made to get Response in the textbox.",
        builtWith: ["HTML","CSS","JavaScript","Prism.js","Git"],
        projectLink:"https://aaryan-r-s.github.io/Web-Projects-Postman-Clone",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Postman-Clone"
      }
    ]
  }

  ngOnInit(): void {
  }

}
