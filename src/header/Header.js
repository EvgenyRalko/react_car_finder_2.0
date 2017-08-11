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
  constructor(props){
    super(props);
    console.log('header', props)
  }

  render(){
    return(
      <header className="public">
        {menuButtonSet}
        <MiniMapCheckbox getCheckbox={(value) => this.props.getCheckbox(value)}/>
      </header>
    )
  }
}

export default Header;
