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
        <MiniMap />
      </div>
    )
  }
}

export default MarketPage;
