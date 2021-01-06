// import data from './data';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =() =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/" >Ecommerce</Link>
          
        </div>
        <div className="header-links">
          <Link to="/cart">Cart </Link>
          <Link to="/SignUp">SignUp </Link>
          <Link to="/Login">Login </Link>
        </div>
      </header>
      <aside className="sidebar">
          <h3> Shopping categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
           x
          </button>
          <ul>
              <li>
                  <a href="index.html">Pants</a>
                </li>
              <li>
                  <a href="index.html">Shirts</a>
                </li>
          </ul>
      </aside>
      
      <main className="main">
        <div className="content">
          <Route path="/SignUp" component={SignUpPage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/" exact={true} component={HomePage} />
        
        </div>
      </main>
      <footer class="footer">
        All rights reserved.
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
