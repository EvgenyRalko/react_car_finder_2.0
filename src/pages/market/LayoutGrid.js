import React from 'react';


class LayoutGrid extends React.Component {
    constructor(props) {
        super(props);
        this.buildLayoutGrid = this.buildLayoutGrid.bind(this);
    }


    buildLayoutGrid() {
        this.rows = 8;
        this.lotsPerRow = 26;

        const horizontalLines = {
            id: ['horizontalLine'],
            number: Math.floor(this.rows / 2) + 1,
            yAxis: 15.5,
            increment: 127,
            readyLines: []
        };

        const verticalLines = {
            id: ['verticalLine'],
            number: this.lotsPerRow + 1,
            xAxis: 22.5,
            y1Axis: 15.5,
            y2Axis: 58,
            xIncrement: 35,
            yAdjacentIncrement: 84.5,
            yDriveThruIncrement: 42.5,
            readyLines: []
        };

        // loop to create horizontal lines
        for (let i = 0; i < horizontalLines.number; i += 1) {
            horizontalLines.readyLines.push(
                <line
                    key={horizontalLines.id + i}
                    className="horizontal"
                    x1="22.5"
                    y1={horizontalLines.yAxis}
                    x2="932.5"
                    y2={horizontalLines.yAxis}
                />);
            horizontalLines.yAxis += horizontalLines.increment;
        }

        function createVerticalLines() {
            for (let i = 0; i < verticalLines.number; i += 1) {
                verticalLines.readyLines.push(
                    <line
                        key={Math.random()}
                        className="vertical"
                        x1={verticalLines.xAxis}
                        y1={verticalLines.y1Axis}
                        x2={verticalLines.xAxis}
                        y2={verticalLines.y2Axis}
                    />);
                verticalLines.xAxis += verticalLines.xIncrement;
            }
            verticalLines.xAxis = 22.5;
        }

        // loops to create vertical lines
        for (let j = 0; j < this.rows; j += 1) {
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

        return [].concat(horizontalLines.readyLines, verticalLines.readyLines);
    }

    render() {
        return (<g>
            {(this.buildLayoutGrid)()}
        </g>
        );
    }
}

export default LayoutGrid;
