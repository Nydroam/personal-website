import React from 'react';
import './App.css';
import treeSim from './tree-sim.png'
import mapEditor from './map-editor.PNG'
import dot from './dot.PNG'
import extant from './extant.png'
import troneline from './troneline.PNG'

const cardList=[
  {image:treeSim,
  link:"https://github.com/Nydroam/TreeSim",
  title:"Tree Simulation",
  },
  {image:mapEditor,
  link:"https://github.com/Nydroam/map-editor",
  title:"Map Editor",
  },
  {image:dot,
  link:"https://github.com/Nydroam/Dot",
  title:"Dot - Virtual Pet",
  },
  {image:extant,
  link:"https://github.com/Nydroam/Extant",
  title:"Extant",
  },
  {image:troneline,
    link:"https://github.com/Nydroam/troneline",
    title:"TRONELINE",
    dark:true,
    }
]
var Card = (image,link,title,dark,i) => {
  dark= dark?" dark":"";
  return <a className="card" key={i}href={link}>
    <div className={"center" + dark}>
      <img src={image} alt={title}></img>
    </div>
    <div className="title">{title}</div>
  </a>
}
function App() {
  return (
    <div className="App flex">
        <div className="left">
        <div className="heading">
          <h2>Raymond Wu</h2>
          <h5>Software Engineer</h5>
          <h5>University Senior</h5>
        </div>
        
        <div className="overflow">
        <div className="bio">
        Raymond Wu is a fledgling developer testing the waters of the software engineering field. He views code as a versatile tool, one that can smooth out bumps in daily life as well as paint new digital vistas. 
        </div>
        <div className="bio">
        He has programmed general and web applications both at the university-level and professionally and is now actively looking for full-time opportunities.
        </div>
        <div className="bio">
        Raymond is a senior at Stony Brook University pursuing his Bachelor of Science in Computer Science Degree.
        </div>
        </div>
        <div className="links">
        <a href="https://github.com/Nydroam"><div className="fa fa-github"></div></a>
        <a href="https://linkedin.com/in/raywu17"> <div className="fa fa-linkedin"></div></a>
        </div>
        </div>
        <div className="right">
        <div className="container">
          <div className="flex">{cardList.map((info,i)=>Card(info.image,info.link,info.title,info.dark,i))} </div>
      
          
        </div>
        </div>
    </div>
  );
}

export default App;
