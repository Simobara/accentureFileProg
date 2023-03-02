import React from 'react';
import Products from "./components/Products";
import data from './controller/data';
import { Container } from "reactstrap";


function App() {
  return (
      <Container className="max-w-[100%] border-gray-800 ">
        <Products products={data } />
      </Container>
    )
}

export default App;

