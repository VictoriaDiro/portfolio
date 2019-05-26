import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Background from './images/background.png';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App" style={{ backgroundImage: `url(${Background})` }} alt="">
        
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
