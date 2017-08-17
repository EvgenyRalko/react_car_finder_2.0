import React from 'react';

const ZoomButtons = (props) => (
    <div>
        <div id="button_wrapper">
            <button className="zoom_buttons" onClick={console.log(props.SVGprops)} id="plus">+</button>
            <button className="zoom_buttons" onClick={() => props.zoomOut(1.15, props.SVGprops)} id="minus">-</button>
            <button id="reset">Reset</button>
        </div>
    </div>
);

// () => props.zoomIn(1.15, props.SVGprops)
export default ZoomButtons;
