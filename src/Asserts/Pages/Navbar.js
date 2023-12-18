import { Link } from 'react-router-dom';
import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top"
        style={{ backgroundColor: '#032F40', color: 'whitesmoke', borderBottom: '1px solid white', Bottom: '10%' }}>
        <div className="container-fluid" style={{ backgroundColor: '#032F40 ', borderBlockColor: '#032F40', height: '70px', }}>
          <div
            style={{ alignItems: 'center', justifyContent: 'center', display:'flex'}}
          >
            <a className="navbar-brand"
              style={{ color: 'wheat', alignContent: 'center', fontSize: '25px' }}
              href="/">THE SMART TECH
            </a>

            <ul style={{
            display: 'flex', paddingTop: '20px', marginLeft: '0%', fontSize: '18px', color: 'white', listStyle: 'none'
          }}>
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page" style={{ color: 'wheat' }} >Home</Link>
            </li>

            <li className="nav-item">
              <Link to={'/about'} className="nav-link" style={{ color: 'wheat' }}>About</Link>
            </li>

              <li className="nav-item">
                <Link to={'/product'} className="nav-link" style={{ color: 'wheat' }}>Product</Link>
              </li>
            </ul>
            
          </div>


          <button className="navbar-toggler"
            type="button"
            style={{ backgroundColor: 'wheat' }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header" style={{ backgroundColor: '#032F40' }}>
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{ color: 'wheat' }}>Smart Tech</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body" style={{ backgroundColor: '#074445' }}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="/"
                    style={{ color: 'wheat' }}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    User profiles
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" style={{ backgroundColor: '#fffff', opacity: 0.5 }} >
                    <li><Link to={"/login"} className="dropdown-item" style={{ color: 'wheat' }}>
                      Log in
                    </Link></li>
                    <li><Link to={"/admin"} className="dropdown-item" style={{ color: 'wheat' }}>
                      Admin
                    </Link></li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>

                    <li><a className="dropdown-item" style={{ color: 'wheat' }} href="/Signup">Sign Up</a></li>
                  </ul>
                </li>

              </ul>

              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;