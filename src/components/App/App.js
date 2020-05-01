import React from 'react';
import Header from '../Header/Header';
import MoreInfo from '../Moreinfo/MoreInfo';
import OtherCouses from '../OtherCourses/OtherCourses';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
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
            <Route path="/more-info" component={MoreInfo } />
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
