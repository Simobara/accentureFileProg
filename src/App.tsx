import React from 'react';
// import './App.css';
import Products from "./components/Products";
import data from './controller/data';
import { Container } from "reactstrap";


function App() {
  return (
      <Container>
        <Products products={data } />
      </Container>
    )
}

export default App;

