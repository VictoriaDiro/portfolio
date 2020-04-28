import React from 'react';
import Header from './components/header/Header';
import MoreInfo from './components/moreinfo/MoreInfo';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  render () {
    return (
      <div className="App">

        <Header />
        <main>
          <Switch>
            <Route
              exact path="/" render={() =>
                <div className="home__container">
                  <Main />
                </div>
              }
            />
            <Route path="/more-info" component={MoreInfo} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
