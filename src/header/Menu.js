import React from 'react';
import menuItems from '../misc/helpers';

const menuListItems = menuItems.map((item) => {
    return <li key={item.name} className="menu-item">{item.name}</li>
});

class Menu extends React.Component {
    render() {
        return (
            <div className="menu-wrapper">
                <ul className="menu-list">
                    {menuListItems}
                </ul>
            </div>
        );
    }
}

export default Menu;
