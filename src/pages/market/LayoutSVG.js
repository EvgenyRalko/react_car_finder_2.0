import React from 'react';
import PropTypes from 'prop-types';
import LayoutLots from './LayoutLots';
import LayoutGrid from './LayoutGrid';
import Modal from './Modal';
import ZoomButtons from './ZoomButtons';

class LayoutSVG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLot: null,
            modalIsOpened: false,
            SVGViewport: {
                x: 0,
                y: 0,
                width: 960,
                height: 560
            },
            draggable: false,
            coordinates: {
                x: null,
                y: null
            }
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeSVGViewport = this.changeSVGViewport.bind(this);
        this.startDragging = this.startDragging.bind(this);
        this.dragging = this.dragging.bind(this);
        this.stopDragging = this.stopDragging.bind(this);
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
    }

    changeSVGViewport(event) {
          const zoomConst = 1.15;

          if (event.deltaY < 0) {
              event.preventDefault();
              this.zoomIn(zoomConst, this.state.SVGViewport);
          }

          if (event.deltaY > 0) {
              event.preventDefault();
              this.zoomOut(zoomConst, this.state.SVGViewport);
          }
      }




  zoomIn(n, data) {
              if (data.width < 500 || data.height < 300) return;
              this.setState({
                  SVGViewport: {
                      x: data.x,
                      y: data.y,
                      width: data.width / n,
                      height: data.height / n
                  }
              });
          }


  zoomOut(n, data) {
              if (data.width > 959 || data.height > 559) return;
              this.setState({
                  SVGViewport: {
                      x: data.x,
                      y: data.y,
                      width: data.width * n,
                      height: data.height * n
                  }
              });
          }

    startDragging(event) {
        this.setState({
            draggable: true,
            coordinates: {
                x: event.pageX,
                y: event.pageY
            }
        });
    }

    dragging(event) {
        if (!this.state.draggable) return;

        this.setState({
            SVGViewport: {
                x: this.state.SVGViewport.x + (this.state.coordinates.x - event.pageX),
                y: this.state.SVGViewport.y + (this.state.coordinates.y - event.pageY),
                width: this.state.SVGViewport.width,
                height: this.state.SVGViewport.height
            },
            coordinates: {
                x: event.pageX,
                y: event.pageY
            }
        });
    }

    stopDragging() {
        this.setState({
            draggable: false
        });
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
        const viewport = this.state.SVGViewport;
        return (
            <div className="svg-layout-component" >
                <svg
                    version="1.1"
                    id="layer1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="960"
                    height="560"
                    viewBox={`${viewport.x} ${viewport.y} ${viewport.width} ${viewport.height}`}
                    style={{ enableBackground: 'new 0 0 960 560' }}
                    xmlSpace="preserve"
                    onWheel={this.changeSVGViewport}
                    onMouseDown={this.startDragging}
                    onMouseMove={this.dragging}
                    onMouseUp={this.stopDragging}
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
