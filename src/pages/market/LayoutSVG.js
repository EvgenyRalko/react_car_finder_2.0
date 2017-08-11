import React from 'react';

const generateLayout = (function () {
    const rows = 8;
    const lotsPerRow = 26;

    const fullLayout = [].concat(layoutGrid(rows, lotsPerRow), layoutLots(rows, lotsPerRow));

    return (fullLayout);
})();

function layoutGrid(rows, lotsPerRow) {

    const horizontalLines = {
        number: Math.floor(rows / 2) + 1,
        yAxis: 15.5,
        increment: 127,
        readyLines: []
    };

    const verticalLines = {
        number: lotsPerRow + 1,
        xAxis: 22.5,
        y1Axis: 15.5,
        y2Axis: 58,
        xIncrement: 35,
        yAdjacentIncrement: 84.5,
        yDriveThruIncrement: 42.5,
        readyLines: []
    }

    //loop to create horizontal lines
    for (let i = 0; i < horizontalLines.number; i++) {
        horizontalLines.readyLines.push(<line key={Math.random() * 100000} className="horizontal" x1="22.5" y1={horizontalLines.yAxis} x2="932.5" y2={horizontalLines.yAxis} />);
        horizontalLines.yAxis += horizontalLines.increment;
    }

    //loops to create vertical lines
    for (let j = 0; j < rows; j++) {
        if (j % 2) {
            createVerticalLines();
            verticalLines.y1Axis += verticalLines.yDriveThruIncrement;
            verticalLines.y2Axis += verticalLines.yDriveThruIncrement;
        } else {
            createVerticalLines();
            verticalLines.y1Axis += verticalLines.yAdjacentIncrement;
            verticalLines.y2Axis += verticalLines.yAdjacentIncrement;
        }
    }

    function createVerticalLines() {
        for (let i = 0; i < verticalLines.number; i++) {
            verticalLines.readyLines.push(<line key={Math.random() * 100000} className="vertical" x1={verticalLines.xAxis} y1={verticalLines.y1Axis} x2={verticalLines.xAxis} y2={verticalLines.y2Axis} />);
            verticalLines.xAxis += verticalLines.xIncrement;
        }
        verticalLines.xAxis = 22.5;
    }

    const drawLines = [].concat(horizontalLines.readyLines, verticalLines.readyLines);

    return (drawLines);

};

function layoutLots(rows, lotsPerRow) {
    const rect = {
        xAxis: 25,
        yAxis: 18,
        xIncrement: 35,
        yAdjacentIncrement: 82,
        yDriveThruIncrement: 45,
        readyRects: []
    }

    for (let j = 0, k = 0; j < rows; j++) {
        for (let i = 0; i < lotsPerRow; i++ , k++) {
            rect.readyRects.push(
                <g key={Math.random() * 100000} className="group-style" data-index={k} onClick={(e) => console.log(e)}>
                    <rect key={Math.random() * 100000} className="rect-style" x={rect.xAxis} y={rect.yAxis} height="40" width="30" />
                    <text key={Math.random() * 100000} className="num-style" x={rect.xAxis} y={rect.yAxis + 26}>{k + 1}</text>
                </g>
            )
            rect.xAxis += rect.xIncrement;
        }
        rect.xAxis = 25;

        if (j % 2) {
            rect.yAxis += rect.yDriveThruIncrement;
        } else {
            rect.yAxis += rect.yAdjacentIncrement;
        }
    }
    return (rect.readyRects);
};


export class LayoutSVG extends React.Component {
    render() {
        return (
            <div className="svg-layout-component">
                <svg version="1.1" id="layer1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960" height="560"
                    viewBox="0 0 960 560" style={{ enableBackground: 'new 0 0 960 560' }} xmlSpace="preserve">
                    <style>
                        {`line { stroke: black; } rect{fill: rgba(255, 255, 255, .3); stroke: gray;} svg{background-color: #EBEBE9}`}
                    </style>
                    {generateLayout}
                </svg>
            </div>

        );
    }

}
