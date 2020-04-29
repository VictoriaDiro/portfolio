import React from 'react';
import Header from '../header/Header';
import MoreInfo from '../moreinfo/MoreInfo';
import OtherCouses from '../otherCourses/otherCourses';
import Contact from '../contact/Contact';
import Main from '../main/Main';
import Footer from '../footer/Footer';
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
            <Route path="/other-courses" component={OtherCouses} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
