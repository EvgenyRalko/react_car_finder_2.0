import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const App = ({children}) => (
    <div>
        <Header />
          <main>
              <div className="page-contents container"> {children || 'no pages yet'} </div>
          </main>
        <Footer />
    </div>
);

export default App;
