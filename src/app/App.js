import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from './Routes';
import MarketPage from '../pages/market/MarketPage';
import './styles.less';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false,
        };
        this.getCheckboxValue = this.getCheckboxValue.bind(this);
    }

    getCheckboxValue(value) {
        this.setState({
            isDisplayed: value
        });
    }

    render() {
        return (
            <div>
              <Header getCheckbox={value => this.getCheckboxValue(value)}/>
              <Main displayMap={this.state.isDisplayed}/>
              <Footer />
            </div>
        );
    }
}


// <MarketPage displayMap={this.state.isDisplayed} />


export default App;
