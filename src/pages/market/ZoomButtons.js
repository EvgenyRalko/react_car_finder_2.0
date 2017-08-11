import React from 'react';

class ZoomButtons extends React.Component {
    render() {
        return (
            <div>
                <div id="button_wrapper">
                    <button className="zoom_buttons" id="plus">+</button>
                    <button className="zoom_buttons" id="minus">-</button>
                    <button id="reset">Reset</button>
                </div>
            </div>
        )
    }
}

export default ZoomButtons;
