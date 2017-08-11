import React from 'react';




class MiniMap extends React.Component{

  constructor(props){
    super(props);
  }

  buildCanvasBackground(){
    const canvasBackground = document.getElementById('minimap-background');
    const contextBackground = canvasBackground.getContext('2d');

    const minimapImage = new Image();

    minimapImage.src = '../../misc/images/small-map_resized.jpg';
    minimapImage.onload = function () {
    contextBackground.save();
    contextBackground.globalAlpha = 0.5;
    contextBackground.drawImage(minimapImage, 0, 0);
    contextBackground.restore();
    }
  }

  render (){
    if (this.props.displayMap){
      return(
          <div>
            <canvas id="minimap-background" height="175" width="300"></canvas>
        </div>
        )
    }
    return (<div></div>)
  }
}

export default MiniMap;
