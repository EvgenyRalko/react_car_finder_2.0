import React from 'react';
import LayoutLots from './LayoutLots';
import LayoutGrid from './LayoutGrid';


class LayoutSVG extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLot: null
        };
    }

    handleSelectedCar(value) {
        this.setState({
            selectedLot: value
        });
    }

    render() {
        return (
            <div className="svg-layout-component">
                <svg
                    version="1.1"
                    id="layer1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="960"
                    height="560"
                    viewBox="0 0 960 560"
                    style={{ enableBackground: 'new 0 0 960 560' }}
                    xmlSpace="preserve"
                >
                    <style>
                        {'line { stroke: black; } rect{fill: rgba(255, 255, 255, .3); stroke: gray;} svg{background-color: #EBEBE9}'}
                    </style>
                    <LayoutGrid />
                    <LayoutLots getCarNumber={value => this.handleSelectedCar(value)} />
                </svg>
            </div>

        );
    }
}


export default LayoutSVG;
