import React from 'react';
import uLogo from '../../assets/Images/MemeBankLogo.png';
import  './Logo.css';


const logo = (props)=>(
    <div className = 'logo-holder'>
        <img src= {uLogo} alt='memeBank Logo'/>
    </div>
)

export default logo;