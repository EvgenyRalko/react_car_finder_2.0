import React from 'react';
import PropTypes from 'prop-types';
import MarketLayout from './MarketLayout';
import ZoomButtons from './ZoomButtons';
import MiniMap from './MiniMap';
import './marketStyle.less';


class MarketPage extends React.PureComponent {
    render() {
        return (
            <div className="market-page">
                <MarketLayout />
                <ZoomButtons />
                <MiniMap displayMap={this.props.displayMap} />
            </div>
        );
    }
}

MarketPage.propTypes = {
    displayMap: PropTypes.bool.isRequired
};

export default MarketPage;
