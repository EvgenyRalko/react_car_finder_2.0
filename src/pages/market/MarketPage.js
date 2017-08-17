import React from 'react';
import PropTypes from 'prop-types';
import MarketLayout from './MarketLayout';
import './marketStyle.less';


class MarketPage extends React.PureComponent {
    render() {
        return (
            <div className="market-page">
                <MarketLayout displayMap={this.props.displayMap}/>
            </div>
        );
    }
}

MarketPage.propTypes = {
    displayMap: PropTypes.bool.isRequired
};

export default MarketPage;
