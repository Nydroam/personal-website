import React from 'react';
import './App.css';
import Bubble from './components/bubble/Bubble';

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
          <h1>Raymond</h1>
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
        <div className="heading">
          <h1>Wu</h1>
          <h3> Avid Reader </h3>
          <h3> Active Gamer</h3>
          <h3> Aspiring Creator</h3>
        </div>
        <Bubble diameter={230} x={15} y={60} spr={3} spry={2} shake={20} shakey={15} float={false}></Bubble>
        <Bubble diameter={250} x={40} y={20} spr={3} spry={2} shake={20} shakey={15} float={false}></Bubble>
        <Bubble diameter={220} x={65} y={50} spr={3} spry={2} shake={20} shakey={15} float={false}></Bubble>
      </div>
    </div>
  );
}

export default App;
