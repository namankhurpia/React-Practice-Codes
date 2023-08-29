import React, { Component } from 'react'

const person = (props) => {
    
        return(
            <div>
            <p onClick={props.click} >hello my name is {props.name} and age is {props.age} </p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed}value={props.name} />
            </div>
        ) 
    
};

export default person