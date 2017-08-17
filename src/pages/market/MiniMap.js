import React from 'react';
import PropTypes from 'prop-types';
import imgSrc from '../../misc/images/small-map_resized.jpg';


class MiniMap extends React.Component {
    componentDidMount() {
        this.buildCanvasBackground();
    }

    componentDidUpdate() {
        this.buildCanvasBackground();
    }

    buildCanvasBackground() {
      console.log(this.props);
        if (this.props.displayMap) {
            const canvasBackground = document.getElementById('minimap-background');
            const contextBackground = canvasBackground.getContext('2d');

            const minimapImage = new Image();

            minimapImage.src = imgSrc;
            minimapImage.onload = function miniMapOnLoad() {
                contextBackground.save();
                contextBackground.globalAlpha = 0.5;
                contextBackground.drawImage(minimapImage, 0, 0);
                contextBackground.restore();
            };
        }
    }

    render() {
        if (this.props.displayMap) {
            return (
                <div>
                    <canvas
                        id="minimap-background"
                        height="175"
                        width="300"
                    />
                </div>
            );
        }
        return null;
    }
}

MiniMap.propTypes = {
    displayMap: PropTypes.bool.isRequired
};

export default MiniMap;
