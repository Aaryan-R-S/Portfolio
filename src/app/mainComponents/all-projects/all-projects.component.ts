import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from 'src/app/ProjectDetails';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {
  allProjectArr:ProjectDetails[];
  constructor() {
    this.allProjectArr = [
      {
        year:2020,
        title:"Collision Game",
        category:"Web Game",
        description:"This is a Collision game developed using HTML Canvas and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs!",
        builtWith: ["HTML","JavaScript","Canvas"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Collision-Game",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Collision-Game"
      },
      {
        year:2020,
        title:"Blockchain Project",
        category:"App Utility",
        description:"This is a Blockchain Transaction project developed using JavaScript. It mimics the current cryptocurrencies that work on the Blockchain technology!",
        builtWith: ["JavaScript","Node.js","Git"],
        projectLink:"https://github.com/Aaryan-R-S/JavaScript-Projects-Blockchain-Transaction",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Projects-Blockchain-Transaction"
      },
      {
        year:2021,
        title:"2D Transformations",
        category:"Geometry",
        description:"This is a python project which uses NumPy and Matplotlib to do various transformations on 2-Dimensional Shapes and then plot them!",
        builtWith: ["Python","NumPy","Matlplotlib"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-2D-Transformations",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-2D-Transformations"
      },
      {
        year:2021,
        title:"Personal Website",
        category:"Web Portfolio",
        description:"This is My Web Portfolio including resume! I needed a website for myself so I decided to build it with the help of a JavaScript framework, AngularJS.",
        builtWith: ["HTML,CSS,JS","AngularJS"],
        projectLink:"https://aaryan-r-s.github.io/Portfolio",
        githubLink:"https://github.com/Aaryan-R-S/Portfolio"
      },
      {
        year:2020,
        title:"Flask Blog",
        category:"Blog",
        description:"This is a Sample Blog made using Bootstrap, JS and Python Flask for practice purpose. It is connected with MySql datbase and also have admin panel to edit and delete posts!",
        builtWith: ["JS","MySql","Python","Flask"],
        projectLink:"https://github.com/Aaryan-R-S/Web-Projects-Flask-Blog",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Flask-Blog"
      },
      {
        year:2021,
        title:"Dino Automated",
        category:"Python App",
        description:"This is a python app which automates the Chrome Dino Game! It is a great utility which I prefer to quickly get to high scores.",
        builtWith: ["Python","PyautoGUI","Pillow"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-Chrome-Dino-Automated",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-Chrome-Dino-Automated"
      },
      {
        year:2021,
        title:"Design Projects",
        category:"UX Designs",
        description:"This github repository contains some of my design projects developed for various apps and websites.",
        builtWith: ["Adobe XD","GSlides"],
        projectLink:"https://xd.adobe.com/view/8314d631-45da-4a96-ba06-2e0e8400f853-d647/grid",
        githubLink:"https://github.com/Aaryan-R-S/Design-Projects"
      },
      {
        year:2020,
        title:"Whatsapp Clone",
        category:"Social Media",
        description:"This is a Whatsapp Clone built using Node.js! It supports multiple participants chat feature, thus, connecting everyone.",
        builtWith: ["Node.js","Socket.io"],
        projectLink:"https://github.com/Aaryan-R-S/Web-Projects-Whatsapp-Clone",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Whatsapp-Clone"
      },
      {
        year:2020,
        title:"Proximity Simulation",
        category:"Web Simulation",
        description:"This is a Proximity Simulation developed using HTML Canvas and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs!",
        builtWith: ["HTML","JavaScript","Canvas"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Proximity-Graph",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Proximity-Graph"
      },
      {
        year:2020,
        title:"Snake PyGame",
        category:"Game App",
        description:"This is a popular Snake game built with Python PyGame module! It is mind relaxing to play it in my free time.",
        builtWith: ["Python","PyGame","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-Snake-PyGame",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-Snake-PyGame"
      },
      {
        year:2020,
        title:"Flappy Bird PyGame",
        category:"Game App",
        description:"This is popular Flappy bird game developed using Python pygame module! It is mind relaxing to play it in my free time.",
        builtWith: ["Python","PyGame","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-Flappy-Bird",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-Flappy-Bird"
      },
      {
        year:2020,
        title:"PacMan",
        category:"Web Game",
        description:"This is a pupular Pacman game developed using JavaScript and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs!",
        builtWith: ["HTML","CSS","JavaScript"],
        projectLink:"https://aaryan-r-s.github.io/JavaScript-Games-PacMan",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Games-PacMan"
      },
    ]
  }

  ngOnInit(): void {
  }
}
