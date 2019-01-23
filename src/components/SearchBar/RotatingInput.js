import React, { Component } from 'react';

class RotatingInput extends Component{
    state = {
        currentIndex : 0
    }
    timeoutId = null ;
    duration = 500;
    placeholders = ['😂','🤣','😆','😃','😝','😏','🤡'];
    componentDidMount(){
        this.timeoutId = setTimeout(this.update,this.duration);

    }
    componentDidUpdate(prevProps, prevState){
        if((prevState.currentIndex !== this.state.currentIndex)&&(this.state.currentIndex !== this.placeholders.length)){
            this.timeoutId = setTimeout(this.update, this.duration);
        }
        if(this.state.currentIndex === this.placeholders.length){
            this.setState(({currentIndex}) =>({currentIndex : 0}))
        }
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutId);
    }
    update = ()=>{
        this.setState(({currentIndex}) =>({currentIndex : currentIndex + 1}));
    }
    render(){
        return(<input placeholder={`Search memeBank `+this.placeholders[this.state.currentIndex]}/>)
    }

}

export default RotatingInput;