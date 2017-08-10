import React from 'react';
import {Link} from 'react-router';
import menuItems from '../misc/helpers';
import MiniMapCheckbox from './miniMapCheckbox'


const menuListItems = menuItems.map((item) => {
  return <li key={item.name}>{item.name}</li>
});

const menuButtonSet = (
  <div className="menu-wrapper">
    <ul>
      {menuListItems}
    </ul>
  </div>
)

class Header extends React.Component{
  render(){
    return(
      <header className="public">
        {menuButtonSet}
        <MiniMapCheckbox />
      </header>
    )
  }
}

export default Header;
