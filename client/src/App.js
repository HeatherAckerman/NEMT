import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Container from "./Components/Container/Container";
import StickyFooter from 'react-sticky-footer';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Container />
      <StickyFooter>
        <Footer />
      </StickyFooter>
    </>
  );
}

export default App;
