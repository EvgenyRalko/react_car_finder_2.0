import React from 'react';
import LayoutSVG from './LayoutSVG';

class MarketLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: null
        };
        this.getSelectedCar = this.getSelectedCar.bind(this);
    }

    getSelectedCar(value) {
        this.setState({
            selectedCar: value
        });
    }
    render() {
        return (
            <div className="layout-wrapper">
                <LayoutSVG getSelectedCar={value => this.getSelectedCar(value)} />
            </div>
        );
    }
}

export default MarketLayout;
