import React, { Component } from 'react';
import axios from 'axios';

class Section extends Component{

    state = {
        closeMSFT:0,
        closeGOOG:0,
        closeAMZN:0
    }

    constructor(props){
        super();
        this.getClose(props);
    }

    getClose = async(props) =>{
        const urlMSFT ='http://api.marketstack.com/v1/tickers/MSFT/eod/'+props.date+'?access_key=93c88038819963db63cc42e76c9035ed';
        await axios.get(urlMSFT).then(res => {
            this.setState({closeMSFT: res.data.close})
        });
        const urlGOOG ='http://api.marketstack.com/v1/tickers/GOOG/eod/'+props.date+'?access_key=93c88038819963db63cc42e76c9035ed';
        await axios.get(urlGOOG).then(res => {
            this.setState({closeGOOG: res.data.close})
        });
        const urlAMZN ='http://api.marketstack.com/v1/tickers/AMZN/eod/'+props.date+'?access_key=93c88038819963db63cc42e76c9035ed';
        await axios.get(urlAMZN).then(res => {
            this.setState({closeAMZN: res.data.close})
        });
    }

    render(){
        return (
            <div className="section">
                <p>Closing price in the NASDAQ market for the {this.props.date}.</p>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Company name</th>
                            <th>Closing price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Microsoft</td>
                            <td>{this.state.closeMSFT}</td>
                        </tr>
                        <tr>
                            <td>Google</td>
                            <td>{this.state.closeGOOG}</td>
                        </tr>
                        <tr>
                            <td>Amazon</td>
                            <td>{this.state.closeAMZN}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        )
    }
}
export default Section;