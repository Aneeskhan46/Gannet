import "./index.css";
import { NavLink } from 'react-router-dom';

//npm install @popperjs/core  //✅ install this

import * as bootstrap from 'bootstrap'; // ✅ import as object
window.bootstrap = bootstrap;           // ✅ assign to global

function Navbar() {

  const closeNavbar = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && window.bootstrap) {
      const collapse = window.bootstrap.Collapse.getInstance(navbar) ||
                       new window.bootstrap.Collapse(navbar, { toggle: false });
      collapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" onClick={closeNavbar}>
          <img style={{ height: "50px", width: "120px" }} src="images/logo.png" />
         
        
        </NavLink>
        <button className="navbar-toggler" type="button"   data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
          <span  className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mb-3">
              <NavLink to="/" id="nav-link" className={((e)=>{return e.isActive ? "gradient" : ""})}   onClick={closeNavbar}>Home</NavLink>
            </li>
            <li className="nav-item mb-3">
              <NavLink to="/About" id="nav-link" className={((e)=>{return e.isActive ? "gradient" : ""})} onClick={closeNavbar}>About</NavLink>
            </li>
            <li className="nav-item mb-3">
              <NavLink to="/Skills" id="nav-link" className={((e)=>{return e.isActive ? "gradient" : ""})} onClick={closeNavbar}>Contact</NavLink>
            </li>
            <li className="nav-item mb-3">
              <NavLink to="/Acheivemnt" id="nav-link" className={((e)=>{return e.isActive ? "gradient" : ""})} onClick={closeNavbar}>Achievements</NavLink>
            </li>
            <li className="nav-item mb-3">
              <NavLink to="/Contact" id="nav-link"  className={((e)=>{return e.isActive ? "gradient" : ""})}  onClick={closeNavbar}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
