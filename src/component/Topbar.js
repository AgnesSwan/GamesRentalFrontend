import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
const Topbar = () => (
  <header className="container">
    <nav className="nav">



      <ul>
        <li>
          <Link to='/'>Available games</Link>
        </li>





      </ul>

    </nav>
  </header >

);

export default Topbar;