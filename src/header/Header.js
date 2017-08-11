import React from 'react';
import {Link} from 'react-router';
import MiniMapCheckbox from './miniMapCheckbox';4
import Menu from './Menu';
import './header.less';


class Header extends React.Component{
  constructor(props){
    super(props);
    console.log('header', props)
  }

  render(){
    return(
      <header className="public">
        <Menu />
        <MiniMapCheckbox getCheckbox={(value) => this.props.getCheckbox(value)}/>
      </header>
    )
  }
}

export default Header;
