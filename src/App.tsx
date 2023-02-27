import './App.css';
import Products from "./components/Products";
import data from "./controller/data"
// import { Container } from "reactstrap";

function App() {
    return (
      <Products products={data}/>
    )
}

export default App;

