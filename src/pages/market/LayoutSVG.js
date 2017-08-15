import React from 'react';
import PropTypes from 'prop-types';
import LayoutLots from './LayoutLots';
import LayoutGrid from './LayoutGrid';
import Modal from './Modal';

class LayoutSVG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLot: null,
            modalIsOpened: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSelectedCar(value) {
        this.setState({
            selectedLot: value
        });
        this.props.getSelectedCar(value);
    }

    openModal() {
        this.setState({
            modalIsOpened: true
        });
    }

    closeModal() {
        this.setState({
            modalIsOpened: false
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
                    <LayoutLots
                        getCarNumber={value => this.handleSelectedCar(value)}
                        openModal={this.openModal}
                    />
                </svg>
                <Modal
                    show={this.state.modalIsOpened}
                    closeModal={this.closeModal}
                    selectedLot={this.state.selectedLot}
                />
            </div>
        );
    }
}

LayoutSVG.propTypes = {
    getSelectedCar: PropTypes.func
};

LayoutSVG.defaultProps = {
    getSelectedCar: null
};

export default LayoutSVG;
