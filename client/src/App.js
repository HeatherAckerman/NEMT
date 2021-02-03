import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import StickyFooter from 'react-sticky-footer';
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import BusinessStructure from "./Pages/BusinessStructure/BusinessStructure";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/BusinessStructure" component={BusinessStructure} />
          </Switch>
          <StickyFooter>
            <Footer />
          </StickyFooter>
        </>
      </Router>
    );
  };
};

export default App;
