import React from 'react';
import PropTypes from 'prop-types';

class MiniMapCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(e) {
        const target = e.target;
        const value = target.checked;

        this.setState({
            isDisplayed: value
        });
        this.props.getCheckbox(value);
    }

    render() {
        return (
            <div className="checkbox-form">
                <form>
                    <label htmlFor="isDisplayed">
                        Мини-карта
                        <input
                            name="isDisplayed"
                            type="checkbox"
                            checked={this.state.isDisplayed}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>
                </form>
            </div>
        );
    }
}


MiniMapCheckbox.propTypes = {
    getCheckbox: PropTypes.func.isRequired
};

export default MiniMapCheckbox;
