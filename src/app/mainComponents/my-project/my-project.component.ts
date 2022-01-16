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
        year:2021,
        title:"How's That",
        category:"Entertainment",
        description:"How's That is a Cricket fantasy team site. Participants can register before the start of cricket match and then see their teams performance on the points table. It is developed using python flask and Cric Api. It is deployed on Heroku using Heroku CLI.",
        builtWith: ["Python","Gspread","JS","Flask","CricApi"],
        projectLink:"https://hows-that-aaryanars.herokuapp.com/",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Hows-That"
      },
      {
        year:2021,
        title:"Will Hero Game",
        category:"Java Game",
        description:"This is a popular Will Hero game clone developed using Java and Java Fx module for GUI. The game uses concepts of OOPs, multi-threading and serialization. It is mind relaxing and fun-playing, multi-player game. It was done by me and my friend Ritvik as a Course Project.",
        builtWith: ["Java","JavaFx","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Sem3-AP-Project/blob/master/readme-images/ss.png",
        githubLink:"https://github.com/Aaryan-R-S/Sem3-AP-Project"
      },
      {
        year:2021,
        title:"iNotebook - eNotes",
        category:"Web Utility",
        description:"This is an eNotes website developed using MERN technologies. It inlcudes login and sign up facilities and MongoDB database connectivity for fetching notes anytime, anywhere. It is built on latest react-function-based components for high user experience.",
        builtWith: ["HTML","Bootstrap", "Node.js","ExpressJs","ReactJs","MongoDB"],
        projectLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/blob/master/Tutorials/inotebook/readme-images/screenshot.png",
        githubLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/tree/master/Tutorials/inotebook"
      }
    ]
  }

  ngOnInit(): void {
  }

}
