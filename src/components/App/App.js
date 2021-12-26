import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
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
              <Route path="/courses" component={Courses} />
            </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
