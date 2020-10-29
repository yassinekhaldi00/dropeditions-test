import React, { Component } from 'react';
import Youtube from 'react-youtube';


class Section3 extends Component{

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
              start:63,
            },
        };
        return(
            <div className='section3'>
                <div className="youtube">
                    <Youtube videoId="f02mOEt11OQ" opts={opts} />
                </div>
            </div>
            
            
        )
    }
} 
export default Section3;