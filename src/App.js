import React, { Component } from 'react';
import Preview from './Preview';
import queryString from 'query-string';
import Error from './components/Error';
import Footer from "./components/Footer";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Emoji Coins'
        };
    }

    render() {
        const parsed = queryString.parse(window.location.search);

        let coinId = "0x";
        if (parsed.id != null) { coinId = parsed.id; }

        if (parsed.id == null)
        {
            return ( 
                <Error error="Coin Template ID was not provided." />
            );
        }
        else
        {
            return (
                <div>
                    <Preview coinId={coinId} />
                    <br/><br/>
                    <Footer />
                </div>
            );
        }
    }
}