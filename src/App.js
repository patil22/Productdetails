import logo from './logo.svg';
import './App.css';
import Product from './Component/Product'

import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';

import Productdetail from './Component/Productdetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Product/>
        <Routes>
          <Route path='Productdetail' Component={Productdetail}></Route>

        </Routes>
      </Router>

     <h1>gAURAV</h1>
     

    </div>
  );
}

export default App;
