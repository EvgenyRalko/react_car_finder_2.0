import React from 'react';
import MarketLayout from './MarketLayout';
import ZoomButtons from './ZoomButtons';
import MiniMap from './MiniMap';

class MarketPage extends React.Component{

  render(){
    return(
      <div className="market-page">
        <MarketLayout />
        <ZoomButtons />
        <MiniMap displayMap={this.props.displayMap}/>
      </div>
    )
  }
}

export default MarketPage;
