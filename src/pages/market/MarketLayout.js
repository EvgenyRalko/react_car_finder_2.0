import React from 'react';

// import ReactSvg from 'react-svg';

import { LayoutSVG } from './LayoutSVG';

class MarketLayout extends React.Component{
  render(){
    return (
      <div>
        <LayoutSVG onPlaceClick={this.onPlaceClick} />
      </div>
    )
  }
}

export default MarketLayout;
