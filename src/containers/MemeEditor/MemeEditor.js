import React, {Component} from 'react';

class MemeEditor extends Component{
    constructor(){
        super();
        this.state = {
            currentImg : 0,
            currentImgbase64 : null,
            ...initState
        };
    }
}

export default MemeEditor;