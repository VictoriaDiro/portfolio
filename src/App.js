import React from 'react';
import Header from './components/header/Header';
import MoreInfo from './components/moreinfo/MoreInfo';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Background from './images/background.png';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App" style={{ backgroundImage: `url(${Background})` }} alt="">

        <Switch>
          <Route
            exact path="/" render={() =>
              <Header />
            }
          />
          <Route path="/more-info" component={MoreInfo} />
          <Route path="/contact" component={Contact} />

        </Switch>
        <Main />
        <Footer />
        
      </div>
    );
  }
}

export default App;
