import PropTypes from 'prop-types';
import React from 'react';
import MiniMapCheckbox from './miniMapCheckbox';
import Menu from './Menu';
import './header.less';


class Header extends React.PureComponent {
    render() {
        return (
            <header className="public">
                <Menu />
                <MiniMapCheckbox getCheckbox={value => this.props.getCheckbox(value)} />
            </header>
        );
    }
}

Header.propTypes = {
    getCheckbox: PropTypes.func.isRequired
};


export default Header;
