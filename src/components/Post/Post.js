import React from 'react';

const post = (props)=>(
    <article className= 'post'>
        <div className='uImage'></div>
        <div>
            <h4>{props.uName}</h4>
            <h5>{props.uHandle}</h5>
            <h5>{props.pTime}</h5>
        </div>
        <div>{props.postContent}</div>
    </article>
);


export default post;