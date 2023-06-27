
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

export default function Navbar(props) {



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li> */}

        {/* <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li> */}

        <li className="nav-item">
          <a className="nav-link analyzer" href="/TextForm">Text Analyzer</a>
        </li>
    
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <div className={`OtherThemes mx-2 text-${props.mode==="dark"?"light":"dark"}`} > <b>Themes:</b>
        {/* <div className='redTheme mx-2'> */}
        <input type="checkbox" className="btn-check mx-2"  onClick={()=>props.otherTheme("red")} id="redbtn-check" autoComplete="off"/>
<label className="btn btn-primary mx-2" htmlFor="redbtn-check"  style={{color:"black", backgroundColor: 'red'}}><b>  Red  </b></label>  
        {/* </div> */}

        {/* <div className='yellowTheme mx-2'> */}
        <input type="checkbox" className="btn-check mx-2" onClick={()=>props.otherTheme("yellow")} id="yelbtn-check" autoComplete="off"/>
<label className="btn btn-primary mx-2" htmlFor="yelbtn-check" style={{color:"black", backgroundColor: 'yellow'}}><b>Yellow</b></label>  
        {/* </div> */}

        {/* <div className='greenTheme mx-2'> */}
        <input type="checkbox" className="btn-check mx-2"  onClick={()=>props.otherTheme("green")} id="greenbtn-check" autoComplete="off"/>
<label className="btn btn-primary mx-2" htmlFor="greenbtn-check" style={{color:"black", backgroundColor: 'green'}}><b>Green</b></label>  
        {/* </div> */}

        </div>

    <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`} >
<input className="form-check-input" onClick={props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
<label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable {props.mode==="dark"?"light":"dark"} Mode</label>
</div> 
      <form className="d-flex mx-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
 
Navbar.propTypes = { 
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps ={
    title: "Set your title",
    about: "About"
}