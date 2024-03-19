import Home from './Screens/Home';
import Login from './Screens/Login';
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './Screens/SignUp.js';
import { CartProvider } from './Componets/ContextReducer.js';
import MyOrder from './Screens/MyOrder.js';
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createuser' element={< SignUp />} />
            <Route exact path='/myOrder' element={< MyOrder />} />
          </Routes>

        </div>
        </Router>
    </CartProvider>
  );
}

export default App;
