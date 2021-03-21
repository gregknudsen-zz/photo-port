import React from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
    <Nav></Nav>
      <Gallery></Gallery>
      <About></About>
    </div>
  );
}

export default App;
