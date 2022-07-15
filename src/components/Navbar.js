import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
 <>
 
 <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>

<div className="container-fluid">
  <a className="navbar-brand text-warning" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active text-warning" aria-current="page" href="/">Home</a>
      {/* <Link className="nav-link text-warning"  to="/About">{props.About}</Link> */}
    
    
    </div>

  </div>
  
  <div className="form-check form-switch text-warning">
  <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
</div>
</nav> 
 </>
  )
}

export default Navbar;

Navbar.prototypes={
  title :PropTypes.string,
  About :PropTypes.string

}