import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MarketPage from '../pages/market/MarketPage';


class App extends React.Component{

	render(){
		return (
			<div>
				<Header />
				<MarketPage />
				<Footer />
			</div>
		)
	}
}


export default App;
