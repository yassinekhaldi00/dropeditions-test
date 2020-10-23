import React, { Component } from 'react';
import Youtube from 'react-youtube';


class Section3 extends Component{
    constructor(){
        super();
    }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              start:63,
            },
        };
        return(
            <div className="youtube">
                <Youtube videoId="f02mOEt11OQ" opts={opts} />
            </div>
            
        )
    }
} 
export default Section3;