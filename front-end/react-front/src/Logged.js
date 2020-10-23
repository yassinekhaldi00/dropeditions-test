import React, { Component } from 'react';
import Section from './Section';
import Section3 from './Section3';

class Logged extends Component{

    render() {
        return(
            <div>
                <Section date = '2020-01-02'/>
                <Section date = '2020-01-03'/>
                <Section3/>
            </div>

        )
    }
}

export default Logged;