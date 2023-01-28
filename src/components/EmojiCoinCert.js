import React, { Component } from 'react';
import Error from './Error';

const defaultGateway = process.env.REACT_APP_DEFAULT_GATEWAY;

export default class EmojiCoinCert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      background: "1",
      isLoading: false,
      error: null,
      isPictureLoaded: false,
    };
  }

  componentDidMount() {
    
    this.setState({ isLoading: true });
    this.setState({ isPictureLoaded: false });
    if (this.props.coinId == null)
    {
        this.setState({ error : 'emojiCoin id was not provided in URL. Correct format "/?id=IPFS_CID"'})
        this.setState({ isLoading: false });
        return;
    }
    this.readJson();
  }

  readJson = async () => {
    const json = require(`../json/faces.json`);
    const data = json.faces.find(face => face.templateId === this.props.coinId);
    console.log(data);
    const background = this.getBackGround(data.coinTypeId);
    console.log(background);
    this.setState({ data: data, isLoading: false, background: background }); 
  }

  getBackGround(coinType)
  {
    if (coinType === 1) return "1";
    else if (coinType === 4 || coinType === 12 || coinType === 22)  return "3"
    else return "2";
  }

  render() {
        const { isLoading, error, background } = this.state;

        if (error) {
            return <Error error={error} />;
        }
    
        if (isLoading || this.state.data == null) {
        return    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-light spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>;
        }

        function truncateText(text, length){
            if (text == null || text.length <= length) return text;
            return `${text.substring(0, length)}...`;
        }
        
        return (
                <div className={'coin-box certBackground' + background}>
                    <div className={'overlay' + background}></div>
                    <div style={{height:'108px'}}></div>
                    <div className="certPadding flexHorisontal" style={{height:'30px'}}>
                        <div className="certCoinNoHeader" style={{width:'406px'}}>Emojicoin No</div>
                        <div className="certCoinNo">{this.state.data != null ? this.state.data.coinNo : null}</div>
                    </div>
                    <div className="certPadding flexVertical" >
                        <div className="certHeader" style={{height:'52px'}} >Certificate of Ownership</div>
                        <div className="certText" style={{height:'52px'}}>This is to certify that the owner has rights to use the art associated 
with NFT for personal and commercial use as defined on document</div>
                    </div>
                    <div className="certPadding flexVertical" style={{height:'43px'}} >
                        <div className="certHash">
                            <a href={defaultGateway + '/ipfs/QmX24gZT2Ar33d7DDPdEYxQPcgJ1evvvP4zRJx8TiydLZd' }>QmX24gZT2Ar33d7DDPdEYxQPcgJ1evvvP4zRJx8TiydLZd</a>
                        </div>
                    </div>   
                    <div style={{height:'50px'}}></div>
                    <div className="certPadding flexHorisontal certDetails" >
                        <div style={{width:'365px'}} className="flexVertical">
                            <div style={{height:'49px'}}>
                                <div className="certDetailsTitle" >
                                    Denomination
                                </div>
                                <div className="certDetailsData" >
                                    {truncateText(this.state.data != null ? this.state.data.coinDenomination : null, 38)}
                                </div>
                            </div>
                            <div style={{height:'49px'}}>
                                <div className="certDetailsTitle" >
                                    Composition
                                </div>
                                <div className="certDetailsData" >
                                    {truncateText(this.state.data != null ? (this.state.data.coinType + ' ['  + this.state.data.coinComposition + ']') : null, 38)}
                                </div>
                            </div>  
                            <div style={{height:'49px'}}>
                                <div className="certDetailsTitle" >
                                    Mint Grade
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.coinGrade : null}
                                </div>
                            </div>       
                            <div style={{height:'49px'}}>
                                <div className="certDetailsTitle" >
                                    VOX CID
                                </div>
                                <div className="certDetailsDataS" >
                                    <a href={defaultGateway + '/ipfs/' + (this.state.data != null ? this.state.data.voxCID : "")}>{(this.state.data != null ? this.state.data.voxCID : "")}</a>
                                </div>
                            </div>                                                                             
                        </div>
                        <div style={{paddingTop:'9px'}} className="certPicture">
                            <img className="certImage" src={defaultGateway + "/ipfs/" + (this.state.data != null ? this.state.data.certCoinCID : null) } alt="" />
                        </div>
                    </div>                                     
                    <div style={{height:'20px'}}></div>
                    <div className="certPadding flexHorisontal certDetails" >
                        <div style={{width:'365px'}} className="flexVertical">
                            <div style={{height:'48px'}}>
                                <div className="certDetailsTitle" >
                                    Emoji Type
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiType : null}
                                </div>
                            </div>
                            <div style={{height:'196px'}}>
                                <div className="certDetailsTitle" >
                                    Features
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature1 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature2 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature3 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature4 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature5 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature6 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature7 : null}
                                </div>
                                <div className="certDetailsData" >
                                    {this.state.data != null ? this.state.data.emojiFeature8 : null}
                                </div>
                            </div>    
                            <div style={{height:'48px'}}>
                                <div className="certDetailsTitle" >
                                    Face CID
                                </div>
                                <div className="certDetailsDataS" >
                                   <a href={defaultGateway + '/ipfs/' + (this.state.data != null ? this.state.data.faceCID : "")}>{(this.state.data != null ? this.state.data.faceCID : "")}</a>
                                </div>
                            </div>                                                      
                        </div>
                        <div style={{paddingTop:'9px'}} className="certPicture">
                            <img className="certImage" src={defaultGateway + "/ipfs/" + (this.state.data != null ? this.state.data.certFaceCID : null) } alt="" />
                        </div>
                    </div>                        
                </div>
        );
    }
}