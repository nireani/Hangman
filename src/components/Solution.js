import React, { Component } from 'react';
import Letter from './Letter';


class Solution extends Component {
    render(){
        let arr = ["_","_","_","_"]
        return (
            <div>
            {arr.map(i=><span>{i} </span>)}
          <div>Guess who's always near</div>
          </div>
        )
    }}
    
    export default Solution
    