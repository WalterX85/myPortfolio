/* eslint-disable react/style-prop-object */
import React from 'react'
import {NavLink} from 'react-router-dom'


function Navigation() {

  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/cg.png" alt="profil-pic"/>
          <h3>Cedric Guyot</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Competences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/c%C3%A9dric-guyot-17231b209/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="https://github.com/WalterX85?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </li>
        </ul>
        <div className="signature">
          <p>From WalterX85 - 2021</p>
        </div>
      </div>

    </div>
  )
}

export default Navigation
