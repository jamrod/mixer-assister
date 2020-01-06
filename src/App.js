import React from 'react';

import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Explainer from './Components/Explainer'
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Explainer />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
