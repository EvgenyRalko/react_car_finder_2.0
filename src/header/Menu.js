import React from 'react';
import menuItems from '../misc/helpers';
import { Link, browserHistory } from 'react-router-dom';

const menuListItems = menuItems.map(item =>
    <Link to={item.link} key={item.name}><li key={item.name} className="menu-item">{item.name}</li></Link>
);

const Menu = () =>
    (<div className="menu-wrapper">
        <ul className="menu-list">
            {menuListItems}
        </ul>
    </div>);


export default Menu;
