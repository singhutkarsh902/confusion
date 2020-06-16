import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Hello World!</NavbarBrand>
          <button className="btn btn-outline-light">Main Button</button>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
