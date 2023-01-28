import React, { Component } from 'react';
import EmojiCoinCert from './components/EmojiCoinCert';
import Container from 'react-bootstrap/Container'

export default class Preview extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Emoji Coin Preview'
        };
    }

    render() {
        return (
            <Container className="p-3 previewContainer">
                <div className="emojiCoin" >
                    <EmojiCoinCert coinId={this.props.coinId}/>
                </div>
            </Container>
        );
    }
}