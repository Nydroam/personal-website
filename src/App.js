import React from 'react';
import './App.css';
import Bubble from './components/bubble/Bubble';

function generateBubbles(n) {
  let bubbles = []
  for (let i = 0; i < n; i++){
    bubbles.push(<Bubble 
      diameter={Math.random()*100 + 30} 
      x={Math.random()*80 + 10}
      y={Math.random()*60 + 20}
      xspeed={Math.random()*5+5}
      yspeed={Math.random()*30+10}
      // spr={Math.random()*5+1}
      // spry={Math.random()*5+1}
      // shake={Math.random()*20+15}
      // shakey={Math.random()*20+15}
      float={true}>
      </Bubble>)
  }
  return bubbles
}

const projects = [
  {name:"TreeSim",
    link:"https://github.com/Nydroam/TreeSim",
  desc:["A simulation of a tree swaying in the wind","Made with C++ and OpenGL"]}
]
function App() {
  return (
    <div className="App flex">
      {/* <div className="card">
        <div className="header">
          Raymond Wu
        </div>
        <hr className="line"></hr>
        <div className="desc">
          Software Engineer
        </div>
        <div className="desc">
          Bio | Projects
        </div>
        <div className="desc">
          <a href="https://github.com/Nydroam" className="fa fa-github"></a>
          <a href="https://linkedin.com/in/raywu17" className="fa fa-linkedin"></a>
        </div>
      </div> */}
      <div className="left">
        
        <div className="heading">
          <h2>Raymond Wu</h2>
          <h5>Frontend Developer</h5>
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
        <a href="https://github.com/Nydroam" className="fa fa-github"></a>
          <a href="https://linkedin.com/in/raywu17" className="fa fa-linkedin"></a>
        </div>
      </div>
      <div className="right">
        {/* <div className="heading">
          <h1>RaymondWu</h1>
          <h3> Avid Reader </h3>
          <h3> Active Gamer</h3>
          <h3> Aspiring Creator</h3>
        </div> */}
        <div className="flex flex-column">
        {projects.map( (x) => <Bubble name={x.name} diameter={220} desc={x.desc} link={x.link}></Bubble>)}
        </div>
      </div>
    </div>
  );
}

export default App;
