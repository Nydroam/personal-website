import React from 'react';

class Bubble extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            x:this.props.x,
            y:this.props.y,
            change:Math.random()<0.5?1:-1,
            changey:Math.random()<0.5?1:-1,
            frame:1,
            framey:1,
            transition:true,
        }
        
    }
    componentDidMount(){
        setInterval( () =>
        {   
            this.setState({transition:true})
            if (this.state.frame >= this.props.shake || this.state.frame <= -1 * this.props.shake)
                this.setState({change:this.state.change*-1});
            if (this.state.framey >= this.props.shakey || this.state.framey <= -1 * this.props.shakey)
                this.setState({changey:this.state.changey*-1});
            console.log(this.state.framey)
            if (this.state.y < -50)
                this.setState({y:110,transition:false})
            this.setState({
                x:this.props.x+ Math.sin(this.state.frame/this.props.shake * Math.PI/2)*this.props.spr,
                y:this.props.float?this.state.y-1:this.props.y+ Math.sin(this.state.framey/this.props.shakey * Math.PI/2)*this.props.spry,
                frame:this.state.frame+this.state.change,
                framey:this.state.framey+this.state.changey});
        },150)
    }
    render(){
        const {x,y} = this.state;
        return(
            <div className="bubble" style={{width:this.props.diameter,height:this.props.diameter, borderRadius:this.props.diameter/2,left:x + "%",top:y + "%", transition:this.state.transition?"0.15s linear":"none"}}><h2>Project Title</h2></div>
        )
    }
}

export default Bubble;
