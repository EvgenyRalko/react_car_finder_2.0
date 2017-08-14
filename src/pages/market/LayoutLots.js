import React from 'react';
import PropTypes from 'prop-types';

// Generator of SVG rectangular lots at the market scheme
class LayoutLots extends React.Component {
    constructor(props) {
        super(props);
        this.selectCarLot = this.selectCarLot.bind(this);
    }

    selectCarLot(e) {
        const lotNumber = parseInt(e.target.dataset.lotId, 10);
        this.props.getCarNumber(lotNumber);
    }

    buildLots() {
        const rows = 8;
        const lotsPerRow = 26;

        const rect = {
            id: 'rect',
            xAxis: 25,
            yAxis: 18,
            xIncrement: 35,
            yAdjacentIncrement: 82,
            yDriveThruIncrement: 45,
            readyRects: []
        };
        const groupId = 'group';
        const textId = 'text';


        for (let j = 0, k = 0; j < rows; j += 1) {
            for (let i = 0; i < lotsPerRow; i += 1, k += 1) {
                rect.readyRects.push(
                    <g
                        key={groupId + k}
                        className="group-style"
                        data-lotId={k}

                        onClick={this.selectCarLot}
                    >
                        <rect
                            key={rect.id + k}
                            className="rect-style"
                            x={rect.xAxis}
                            y={rect.yAxis}
                            height="40"
                            width="30"
                            data-lotId={k}
                        />
                        <text
                            key={textId + k}
                            className="num-style"
                            x={rect.xAxis}
                            y={rect.yAxis + 26}
                            data-lotId={k}
                        >
                            {k + 1}
                        </text>
                    </g>
                );
                rect.xAxis += rect.xIncrement;
            }
            rect.xAxis = 25;

            if (j % 2) {
                rect.yAxis += rect.yDriveThruIncrement;
            } else {
                rect.yAxis += rect.yAdjacentIncrement;
            }
        }
        return rect.readyRects;
    }
    render() {
        return (<g>
            {(this.buildLots)()}
        </g>
        );
    }
}

LayoutLots.propTypes = {
    getCarNumber: PropTypes.func
};

LayoutLots.defaultProps = {
    getCarNumber: null
};


export default LayoutLots;
