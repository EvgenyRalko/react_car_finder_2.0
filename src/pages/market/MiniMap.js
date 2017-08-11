import React from 'react';

import imgSrc from '../../misc/images/small-map_resized.jpg';


class MiniMap extends React.Component {

	constructor(props) {
		super(props);
	}

	buildCanvasBackground() {
		if (this.props.displayMap) {
			const canvasBackground = document.getElementById('minimap-background');
			const contextBackground = canvasBackground.getContext('2d');

			const minimapImage = new Image();

			minimapImage.src = imgSrc;
			minimapImage.onload = function () {
				contextBackground.save();
				contextBackground.globalAlpha = 0.5;
				contextBackground.drawImage(minimapImage, 0, 0);
				contextBackground.restore();
			}
		}

	}

	componentDidMount() {
		this.buildCanvasBackground();
	}

	componentDidUpdate() {
		this.buildCanvasBackground();
	}

	render() {
		if (this.props.displayMap) {
			return (
				<div>
					<canvas id="minimap-background" height="175" width="300"></canvas>
				</div>
			);
		}
		return (<div></div>);
	}
}

export default MiniMap;
