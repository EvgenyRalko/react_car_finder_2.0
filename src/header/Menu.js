import React from 'react';
import menuItems from '../misc/helpers';

const menuListItems = menuItems.map(item =>
    <li key={item.name} className="menu-item">{item.name}</li>
);

const Menu = () =>
    (<div className="menu-wrapper">
        <ul className="menu-list">
            {menuListItems}
        </ul>
    </div>);


export default Menu;
