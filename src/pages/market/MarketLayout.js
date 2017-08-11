import React from 'react';

// import ReactSvg from 'react-svg';

import { LayoutSVG } from './LayoutSVG';

class MarketLayout extends React.Component {
    render() {
        return (
            <div className="layout-wrapper">
                <LayoutSVG onPlaceClick={this.onPlaceClick} />
            </div>
        )
    }
}

export default MarketLayout;
