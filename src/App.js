import React from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Explainer from './Components/Explainer'
import Search from './Components/Search/Search';
import Details from './Components/Details/Details'
import Drink from './Components/Details/Drink'
import SearchResults from './Components/Details/SearchResults'
import TwoLevelSearch from './Components/Search/TwoLevelSearch'


function App() {
  return (
    <div className="App flex-container-column">
      <Header />
      <Explainer />
      <Search />
      <Switch>
          <Route path="/" component={Details} exact></Route>
          <Route path="/drink/:drink" component={Drink} />
          <Route path="/search-results" component={SearchResults} />
          
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
