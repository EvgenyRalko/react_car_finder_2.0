import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Statistics from '../pages/statistics/Statistics';
import MarketLayout from '../pages/market/MarketLayout';
import Filter from '../pages/filter/Filter';
import NotFound from '../pages/errors/not-found/NotFound';



const Main = (props) => {
  console.log(props);
  return (
   <main>
     <Switch>
       <Route exact path='/' render={() => <MarketLayout displayMap={props.displayMap} />} />
       <Route exact path='/filter' component={Filter} />
       <Route exact path='/statistics' component={Statistics} />
       <Route path='*' component={NotFound} />
     </Switch>
   </main>
 );
}

export default Main;
