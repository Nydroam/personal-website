import React from 'react';
import { NONAME } from 'dns';

class Bubble extends React.Component{

    constructor(props){
        super(props)
        
    }
    componentDidMount(){
    }
    render(){
        // const element = this.props.float?
        // <div className="bubble" style={{width:this.props.diameter,height:this.props.diameter, borderRadius:this.props.diameter/2,left:x+"%",animation: "animateBubble "+this.props.yspeed+"s linear infinite, sideWays "+this.props.xspeed+"s ease-in-out infinite alternate", transform:"none"}}></div>:
        // <div className="bubble" style={{width:this.props.diameter,height:this.props.diameter, borderRadius:this.props.diameter/2,left:x+"%",top:y + "%",animation: "staticBubble "+this.props.yspeed+"s linear infinite alternate, sideWays "+this.props.xspeed+"s ease-in-out infinite alternate", transition:"transform 0.2s linear"}}><h2>Project Title</h2></div>; 
        // return(
        //     element
        // )
        return(
            <div className="flex" style={{marginTop:"20px"}}>
            <a href={this.props.link}><div className="bubble" style={{
                width:this.props.diameter,
                minWidth:this.props.diameter,
                height:this.props.diameter,
                marginRight:20,
                borderRadius:this.props.diameter/2}}> {this.props.name} </div>
            </a>
            <div className="proj">
                {this.props.desc.map(para=> <div>{para}</div>)}
            </div></div>
        )
    }
}

export default Bubble;
