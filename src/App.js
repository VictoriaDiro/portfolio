import React from 'react';
import Header from './components/header/Header';
import MoreInfo from './components/moreinfo/MoreInfo';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Background from './images/background.png';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App" style={{ backgroundImage: `url(${Background})` }} alt="">

        <header className="header__container">
        <Link to="/" className="title" style={{ textDecoration: 'none' }}>VICTORIA DIAZ · Front-End Developer</Link>
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__item moreinfo">
                <Link to="/more-info" style={{ textDecoration: 'none' }}>Más información</Link>
              </li>
              <li className="navbar__item contact">
                <Link to="/contact" style={{ textDecoration: 'none' }}>Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>

          <Switch>

            <Route
              exact path="/" render={() =>
                <div className="home__container">
                  <Header />
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
