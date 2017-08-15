import React from 'react';
import PropTypes from 'prop-types';


class Modal extends React.PureComponent {
    render() {
        if (!this.props.show) return null;

        return (
            <div
                className="backdrop"
                onClick={this.props.closeModal}
                role="button"
                tabIndex={0}
            >
                <div className="modal">
                    <span
                        className="close-modal"
                        role="button"
                        onClick={this.props.closeModal}
                        tabIndex={0}
                    >X</span>
                    <div className="car-lot-number">
                        <span>{this.props.selectedLot + 1}</span>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func,
    selectedLot: PropTypes.number
};

Modal.defaultProps = {
    closeModal: null,
    selectedLot: null
};

export default Modal;
