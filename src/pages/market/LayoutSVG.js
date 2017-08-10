import React from 'react';

export class LayoutSVG extends React.Component {
  render() {
    return (
      <svg version="1.1" id="layer1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960" height="560"
         viewBox="0 0 960 560" style={{enableBackground: 'new 0 0 960 560'}} xmlSpace="preserve">
         <style>
            {`line { stroke: black; }`}
         </style>
         {(function () {
            const rows = 8;
            const lotsPerRow = 26;

            const horizontalLines = {
              number : Math.floor(rows / 2) + 1,
              yAxis : 15.5,
              increment: 127,
              readyLines : []
            };

            const verticalLines = {
              number : rows + 1,
              xAxis : 22.5,
              y1Axis : 15.5,
              y2Axis : 58,
              xIncrement: 35,
              yIncrement : 84.5,
              readyLines : []
            }


            //loop to create horizontal lines
            for (let i = 0; i < horizontalLines.number; i++){
              horizontalLines.readyLines.push(<line class="st1 avenue" x1="22.5" y1="${horizontalLines.yAxis}" x2="932.5" y2="${horizontalLines.yAxis}"/>);
              horizontalLines.y += horizontalLines.increment;
           }

           //loop to create horizontal lines
           for (let i = 0; i < verticalLines.number; i++){
                          
          }

       })()}
      </svg>);
  }

}
