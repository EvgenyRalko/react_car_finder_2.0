import React from 'react';

class MiniMapCheckbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isDisplayed: false
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  };

  handleCheckboxChange(e){
    const target = e.target;
    const value = target.checked;

    this.setState({
      isDisplayed : value
    });
    this.props.getCheckbox(value);
  }

  render(){
    return(
      <form>
          <label>
            Мини-карта
            <input name="isDisplayed" type="checkbox" checked={this.state.isDisplayed} onChange={this.handleCheckboxChange} />
          </label>
        </form>
    )
  };
}


export default MiniMapCheckbox;
