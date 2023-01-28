import React, { Component } from 'react';

export default class Error extends Component {

    render() {
        return (
           <div className="errorPanel">
                <table className="errorPanelTable">
                    <tbody>
                        <tr className="errorPanelText" >
                            <td style={{padding:'20px', margin:'20px'}}>
                                 Failed to load coin data. <br />
                                 Error message: {this.props.error.includes("Failed to fetch") ? "Emoji Coin with provided id does not exist" : this.props.error} <br />
                            </td>
                            <td>
                                <img className="errorIcon" src={require('../images/Error-icon.png')} alt="" />
                            </td>
                        </tr>
                     </tbody>
                </table>
            </div>
        );
    }
}