import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ProjectDetails } from 'src/app/ProjectDetails';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archiveProjectArr:ProjectDetails[];
  constructor(private titleService:Title) {
    this.titleService.setTitle("Archive | Aaryan Raj Saxena");
    this.archiveProjectArr = [
      {
        year:2022,
        title:"FCS Web Project",
        category:"Security",
        description:"This is a group project done by me, Rahul, Prakhar and Deepam for our FCS course! It involves creating a highly secure website which can act as e-care portal for patients, hospitals and doctors. It has automatic document verification system and many more features.",
        builtWith: ["Blockchain","MongoDB","ReactJS","Linux","git"],
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
        year:2022,
        title:"Cryptography Assignments",
        category:"Cryptography",
        description:"This repository contains the Applied Cryptography assignments done by me in Monsoon Semester 2023 at IIIT Delhi!",
        builtWith: ["Python","gmpy2","Crypto"],
        projectLink:"https://github.com/Aaryan-R-S/Sem5-AC-Assignments",
        githubLink:"https://github.com/Aaryan-R-S/Sem5-AC-Assignments"
      },
      {
        year:2022,
        title:"Web3 Course",
        category:"Course",
        description:"This course contains a full introduction into all of the core concepts related to blockchain, smart contracts, Solidity, ERC20s, full-stack Web3 dapps, decentralized finance (DeFi), JavaScript, TypeScript, Chainlink, Ethereum, upgradable smart contracts, DAOs, the graph, moralis, aave, IPFS, and more.",
        builtWith: ["Solidity","JS","TS","Chainlink","Ethereum","Moralis","The Graph"],
        projectLink:"https://github.com/Aaryan-R-S/Web3-FCC-32hr-Course",
        githubLink:"https://github.com/Aaryan-R-S/Web3-FCC-32hr-Course"
      },
      {
        year:2022,
        title:"Social Chatbot",
        category:"Health",
        description:"This is fullstack MERN project named Social Chatbot done under AI for Social Counselling research at ADS Lab, IIITD under the guidance of Dr Mukesh Mohania and PhD Scholar Ayan K Saif. The project focuses on designing an AI-enabled social counseling system based on Emotion-Focused Therapy.",
        builtWith: ["MonogoDB","NextJS","ReactJS","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Social-Chatbot-Project-Frontend",
        githubLink:"https://github.com/Aaryan-R-S/Social-Chatbot-Project-Backend"
      },
      {
        year:2022,
        title:"Next JS Tutorials",
        category:"Tutorial",
        description:"This is complete NextJS tutorial repository along with projects!",
        builtWith: ["NextJS","ReactJS","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Next-JS-Tutorials",
        githubLink:"https://github.com/Aaryan-R-S/Next-JS-Tutorials"
      },
      {
        year:2022,
        title:"Online Banking System",
        category:"Database Design",
        description:"This is a Online Banking System complete backend project alongwith fully-fledged MySQL database with 50+ Relational Schemas. It contains ER Diagram, Complete Database Dump, Database Entries in both CSV & Excel, Source Code and Project Report.",
        builtWith: ["Python","SQL","MySQL"],
        projectLink:"https://github.com/Aaryan-R-S/Online-Banking-System-Database",
        githubLink:"https://github.com/Aaryan-R-S/Online-Banking-System-Database"
      },
      {
        year:2022,
        title:"Quantitative Biology",
        category:"Algorithms",
        description:"This repo contains the IQB assignments done by me in Winter Semester 2022 at IIIT Delhi!",
        builtWith: ["Python","Jupyter Notebook"],
        projectLink:"https://github.com/Aaryan-R-S/Sem4-IQB-Assignments",
        githubLink:"https://github.com/Aaryan-R-S/Sem4-IQB-Assignments"
      },
      {
        year:2022,
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
        builtWith: ["Node.js","ExpressJs","ReactJs","MongoDB"],
        projectLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/blob/master/Tutorials/inotebook/readme-images/screenshot.png",
        githubLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/tree/master/Tutorials/inotebook"
      },
      {
        year:2021,
        title:"News App",
        category:"Web Utility",
        description:"This is a news website developed using ReactJs and News API. It is highly productive news site that really suit my needs!",
        builtWith: ["Bootstrap", "Node.js", "ReactJs", "NewsAPI"],
        projectLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/blob/master/Tutorials/newsapp_rcc_rfc/readme-images/screenshot.png",
        githubLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/tree/master/Tutorials/newsapp_rcc_rfc"
      },
      {
        year:2021,
        title:"Text Utils",
        category:"Web Utility",
        description:"This is a text utility website developed using ReactJs. It is highly productive site for formatting text that really suit my needs!",
        builtWith: ["HTML", "Bootstrap", "Node.js", "ReactJs"],
        projectLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/blob/master/Tutorials/textutils_rfc/readme-images/screenshot.png",
        githubLink:"https://github.com/Aaryan-R-S/ReactJS-Tutorials/tree/master/Tutorials/textutils_rfc"
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
        year:2021,
        title:"Assembler",
        category:"Computer ISA",
        description:"This is a CO group assignment (Semester-2) done by me, Prakhar and Sanyam. Aim - To design and implement a custom assembler and a custom simulator for a given ISA.",
        builtWith: ["Python", "Matplotlib", "Shell"],
        projectLink:"https://github.com/Aaryan-R-S/Sem2-CO-Assignment",
        githubLink:"https://github.com/Aaryan-R-S/Sem2-CO-Assignment"
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
        year:2021,
        title:"Personal Website",
        category:"Web Portfolio",
        description:"This is My Web Portfolio including resume! I needed a website for myself so I decided to build it with the help of a JavaScript framework named AngularJS.",
        builtWith: ["HTML,CSS,JS","Bootstrap","jQuery","AngularJS"],
        projectLink:"https://aaryan-r-s.github.io/Portfolio",
        githubLink:"https://github.com/Aaryan-R-S/Portfolio"
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
        title:"Todo App",
        category:"Web Utility",
        description:"This is a simple Todo list app that really suit my needs so I created this one. I usually use this to manage my day to day tasks so as to make myself more productive!",
        builtWith: ["Node.js","AngularJS","JavaScript","jQuery"],
        projectLink:"https://aaryan-r-s.github.io/AngularJS-Projects-Todo-App",
        githubLink:"https://github.com/Aaryan-R-S/AngularJS-Projects-Todo-App"
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
        title:"GitHub Profile",
        category:"GitHub Profile",
        description:"This is my GitHub profile repository developed using Markdown!",
        builtWith: ["Markdown","Git"],
        projectLink:"https://github.com/Aaryan-R-S",
        githubLink:"https://github.com/Aaryan-R-S/Aaryan-R-S"
      },
      {
        year:2021,
        title:"Design Projects",
        category:"UX Designs",
        description:"This github repository contains some of my design projects developed for various apps and websites.",
        builtWith: ["Adobe XD","Google Slides","Google Forms"],
        projectLink:"https://xd.adobe.com/view/8314d631-45da-4a96-ba06-2e0e8400f853-d647/grid",
        githubLink:"https://github.com/Aaryan-R-S/Design-Projects"
      },
      {
        year:2021,
        title:"Data Struct. & Algo.",
        category:"Tutorial",
        description:"There are many DSA Tutorials available on internet, however, I didn't find one that really suit my needs so I created this one. I wanted to create it so amazing that it'll be containing every important topic you will ever study.",
        builtWith: ["C","C++","Git", "GitHub"],
        projectLink:"https://github.com/Aaryan-R-S/DSA-Tutorials",
        githubLink:"https://github.com/Aaryan-R-S/DSA-Tutorials"
      },
      {
        year:2021,
        title:"Git & GitHub",
        category:"Cheatsheet",
        description:"There are many Git commands cheatsheets available on internet, however, I didn't find one that really suit my needs so I created this one. I wanted to create it so amazing that it'll be containing every important topic you will ever study.",
        builtWith: ["VS Code","Git","GitHub"],
        projectLink:"https://github.com/Aaryan-R-S/Git-GitHub-Cheatsheet",
        githubLink:"https://github.com/Aaryan-R-S/Git-GitHub-Cheatsheet"
      },
      {
        year:2020,
        title:"Web Development",
        category:"Tutorial",
        description:"There are many Web Development Tutorials available on internet, however, I didn't find one that really suit my needs so I created this one. I wanted to create it so amazing that it'll be containing every important topic you will ever study.",
        builtWith: ["HTML,CSS,JS","Node.js","MongoDB", "Mongoose"],
        projectLink:"https://github.com/Aaryan-R-S/Web-Development-Tutorials",
        githubLink:"https://github.com/Aaryan-R-S/Web-Development-Tutorials"
      },
      {
        year:2020,
        title:"Ping-Pong Game",
        category:"Web Game",
        description:"This is a Ping Pong game developed using JavaScript and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing, multi-player game. It is build using HTML canvas and vector library from the MinuteLabs.io",
        builtWith: ["HTML","CSS","JavaScript","Canvas","Git"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Ping-Pong",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Ping-Pong"
      },
      {
        year:2020,
        title:"Collision Game",
        category:"Web Game",
        description:"This is a Collision game developed using HTML Canvas and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs. I usually play this to relax myself to make stress-free environment!",
        builtWith: ["HTML","CSS","JavaScript","Canvas","Git"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Collision-Game",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Collision-Game"
      },
      {
        year:2020,
        title:"Sketchboard Game",
        category:"Web Game",
        description:"This is a Sketchboard Game developed using HTML Canvas and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs. I usually play this to relax myself to make stress-free environment!",
        builtWith: ["HTML","CSS","JavaScript","Canvas","Git"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Sketchboard",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Sketchboard"
      },
      {
        year:2020,
        title:"Snake Game",
        category:"Web Game",
        description:"This is a Snake game developed using HTML Canvas and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs. I usually play this to relax myself to make stress-free environment!",
        builtWith: ["HTML","CSS","JavaScript","Canvas","Git"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Snake-Game",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Snake-Game"
      },
      {
        year:2020,
        title:"Proximity Simulation",
        category:"Web Simulation",
        description:"This is a Proximity Simulation developed using HTML Canvas and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs. I usually play this to relax myself to make stress-free environment!",
        builtWith: ["HTML","CSS","JavaScript","Canvas","Git"],
        projectLink:"https://aaryan-r-s.github.io/Canvas-Projects-Proximity-Graph",
        githubLink:"https://github.com/Aaryan-R-S/Canvas-Projects-Proximity-Graph"
      },
      {
        year:2020,
        title:"Covid-19 Cases Notify",
        category:"Health",
        description:"This is a python app which notifies the user with the number of Covid-19 cases within the country with the web scrapping!",
        builtWith: ["Python","Requests","BS4","Plyer"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-Covid19-Cases-Notify",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-Covid19-Cases-Notify"
      },
      {
        year:2020,
        title:"Healthy Programmer",
        category:"Health",
        description:"This is python notifier app which helps in maintaining the health of programmers!",
        builtWith: ["Python","Pygame","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-Healthy-Programmer-Notifier",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-Healthy-Programmer-Notifier"
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
        description:"This is popular Flappy bird game developed using Python pygame module!",
        builtWith: ["Python","PyGame","Git"],
        projectLink:"https://github.com/Aaryan-R-S/Python-Projects-Flappy-Bird",
        githubLink:"https://github.com/Aaryan-R-S/Python-Projects-Flappy-Bird"
      },
      {
        year:2020,
        title:"Postman Clone",
        category:"Web Utility",
        description:"This is a Postman Clone Website developed using JavaScript Fetch API. The user can make a GET or POST by mentioning request type and giving params either in form of JSON or any other custom made to get Response in the textbox.",
        builtWith: ["HTML","CSS","JavaScript","Prism.js","Git"],
        projectLink:"https://aaryan-r-s.github.io/Web-Projects-Postman-Clone",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Postman-Clone"
      },
      {
        year:2020,
        title:"Catch Me Game",
        category:"Web Game",
        description:"This is a Butterfly catching game developed using JavaScript and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs. I usually play this to relax myself to make stress-free environment!",
        builtWith: ["HTML","CSS","JavaScript","Git"],
        projectLink:"https://aaryan-r-s.github.io/JavaScript-Games-Catch-Me",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Games-Catch-Me"
      },
      {
        year:2020,
        title:"PacMan",
        category:"Web Game",
        description:"This is a pupular Pacman game developed using JavaScript and served as a static webpage using GitHub pages. It is mind relaxing and fun-playing that really suit my needs. I usually play this to relax myself to make stress-free environment!",
        builtWith: ["HTML","CSS","JavaScript","Git"],
        projectLink:"https://aaryan-r-s.github.io/JavaScript-Games-PacMan",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Games-PacMan"
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
        year:2020,
        title:"Drag-N-Drop",
        category:"Web Feature",
        description:"This is simple Drag-N-Drop webpage developed using JavaScript and served as a static webpage using GitHub pages!",
        builtWith: ["HTML","CSS","JavaScript","Git"],
        projectLink:"https://aaryan-r-s.github.io/JavaScript-Projects-Drag-N-Drop",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Projects-Drag-N-Drop"
      },
      {
        year:2020,
        title:"RaceCar Animation",
        category:"Web Animation",
        description:"This is simple RaceCar Animation webpage developed using JavaScript and served as a static webpage using GitHub pages!",
        builtWith: ["HTML","CSS","JavaScript"],
        projectLink:"https://aaryan-r-s.github.io/JavaScript-Projects-RaceCar-Animation",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Projects-RaceCar-Animation"
      },
      {
        year:2020,
        title:"Web Calculator",
        category:"Web Utility",
        description:"This is simple Web-Calculator webpage developed using JavaScript and served as a static webpage using GitHub pages!",
        builtWith: ["HTML","CSS","JavaScript"],
        projectLink:"https://aaryan-r-s.github.io/JavaScript-Projects-Web-Calculator",
        githubLink:"https://github.com/Aaryan-R-S/JavaScript-Projects-Web-Calculator"
      },
      {
        year:2020,
        title:"Password Generator",
        category:"Web Utility",
        description:"This is a Password Generator & Recommender Website developed using pure JavaScript!",
        builtWith: ["HTML","CSS","JavaScript"],
        projectLink:"https://aaryan-r-s.github.io/Web-Projects-Pwd-Generator",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Pwd-Generator"
      },
      {
        year:2020,
        title:"Whatsapp Clone",
        category:"Social Media",
        description:"This is a Whatsapp Clone built using Node.js! It supports multiple participants chat feature, thus, connecting everyone.",
        builtWith: ["HTML","CSS","JS","Node.js","Socket IO"],
        projectLink:"https://github.com/Aaryan-R-S/Web-Projects-Whatsapp-Clone",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Whatsapp-Clone"
      },
      {
        year:2020,
        title:"Flask Blog",
        category:"Blog",
        description:"This is a Sample Blog made using Bootstrap, JS and Python Flask for practice purpose and connected with MySql!",
        builtWith: ["HTML","CSS","JS","MySql","Python","Flask"],
        projectLink:"https://github.com/Aaryan-R-S/Web-Projects-Flask-Blog",
        githubLink:"https://github.com/Aaryan-R-S/Web-Projects-Flask-Blog"
      }
    ]
  }

  ngOnInit(): void {
  }

}
