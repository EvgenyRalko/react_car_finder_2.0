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
              number : lotsPerRow + 1,
              xAxis : 22.5,
              y1Axis : 15.5,
              y2Axis : 58,
              xIncrement: 35,
              yAdjacentIncrement : 84.5,
              yDriveThruIncrement: 42.5,
              readyLines : []
            }

            //loop to create horizontal lines
            for (let i = 0; i < horizontalLines.number; i++){
              horizontalLines.readyLines.push(<line key={Math.random()*100000} className="horizontal" x1="22.5" y1={horizontalLines.yAxis} x2="932.5" y2={horizontalLines.yAxis} />);
              horizontalLines.yAxis += horizontalLines.increment;
           }

           //loops to create vertical lines
           for (let j = 0; j < rows; j++) {
             if (j%2){
               createVerticalLines();
               verticalLines.y1Axis += verticalLines.yDriveThruIncrement;
               verticalLines.y2Axis += verticalLines.yDriveThruIncrement;
             } else {
               createVerticalLines();
               verticalLines.y1Axis += verticalLines.yAdjacentIncrement;
               verticalLines.y2Axis += verticalLines.yAdjacentIncrement;
             }
           }

           function createVerticalLines (){
             for (let i = 0; i < verticalLines.number; i++){
               verticalLines.readyLines.push(<line key={Math.random()*100000} className="vertical" x1={verticalLines.xAxis} y1={verticalLines.y1Axis} x2={verticalLines.xAxis} y2={verticalLines.y2Axis} />);
               verticalLines.xAxis += verticalLines.xIncrement;
            }
            verticalLines.xAxis = 22.5;
           }

           const drawLines = [].concat(horizontalLines.readyLines, verticalLines.readyLines);

           return (drawLines);
           
       })()}
      </svg>);
  }

}
