import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarMain from './NavbarMain';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactDetails from './pages/ContactDetails';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import MainFooter from './MainFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarMain />

      <div className="App__mainDiv">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={ AboutMe } />
          <Route exact path="/contact-details" component={ ContactDetails } />
          <Route exact path="/experiences" component={ Experiences } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/skills" component={ Skills } />
        </Switch>
      </div>

      <MainFooter />
    </div>
  );
}

export default App;
