import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Posts from '../Posts/Posts';

class Home extends Component{
    render(){
        return(
            <Aux>
                <div className ='trends-wrapper'>Trends</div>
                <div className='feed-wrapper'><Posts onOpen = {this.props.onOpen}/></div>
                <div className='advertisment-wrapper'>Ads</div>
            </Aux>
        )
    }
}

export default Home;