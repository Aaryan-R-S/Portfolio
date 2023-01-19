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
        year:2021,
        title:"Lightning BFS",
        category:"Tkinter Simulation",
        description:"This is a Lightning simulator which works on Breadth-first-search algorithm. It is built with Python with cool GUI to display the animation using Python Tkinter module.",
        builtWith: ["Python","Tkinter"],
        projectLink:"https://github.com/Aaryan-R-S/Lightning-BFS/blob/master/readme-images/screenshot.png",
        githubLink:"https://github.com/Aaryan-R-S/Lightning-BFS"
      },
      {
        year:2022,
        title:"Social Chatbot",
        category:"Health",
        description:"This is fullstack MERN project done under AI for Social Counselling research at ADS Lab, IIITD. The project focuses on designing an AI-enabled social counseling system based on Emotion-Focused Therapy.",
        builtWith: ["MonogoDB","NextJS","ReactJS"],
        projectLink:"https://github.com/Aaryan-R-S/Social-Chatbot-Project-Frontend",
        githubLink:"https://github.com/Aaryan-R-S/Social-Chatbot-Project-Backend"
      },
      {
        year:2022,
        title:"FCS Web Project",
        category:"Security",
        description:"This is a group project which involves creating a highly secure website which can act as e-care portal for patients, hospitals and doctors. It has automatic document verification system and many more features.",
        builtWith: ["Blockchain","MongoDB","ReactJS"],
        projectLink:"https://github.com/Aaryan-R-S/FCS-Project-2022",
        githubLink:"https://github.com/Aaryan-R-S/FCS-Project-2022"
      },
      {
        year:2022,
        title:"Blind Signatures",
        category:"Cryptography",
        description:"This is Blind Signature for Untraceable Payments paper implementation done by me during Monsoon Semester 2023 in Applied Cryptography course!",
        builtWith: ["Python","gmpy2","Crypto"],
        projectLink:"https://github.com/Aaryan-R-S/Sem5-AC-Blind-Signatures",
        githubLink:"https://github.com/Aaryan-R-S/Sem5-AC-Blind-Signatures"
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
        title:"News App",
        category:"Web Utility",
        description:"This is a news website developed using ReactJs and News API. It is highly productive news site that really suit my needs!",
        builtWith: ["Bootstrap", "ReactJs", "NewsAPI"],
        projectLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/blob/master/Tutorials/newsapp_rcc_rfc/readme-images/screenshot.png",
        githubLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/tree/master/Tutorials/newsapp_rcc_rfc"
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
    ]
  }

  ngOnInit(): void {
  }
}
