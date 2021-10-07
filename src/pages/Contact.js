import React from 'react'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'


function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Chalons en Champagne</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0603303932">
                <span
                  className="clickInput"
                  onClick={() => { alert ('Téléphone copié !');}}
                  >06 03 30 39 32</span>
              </CopyToClipboard>
            </li>

            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="cedric.guyot2@gmail.com">
                <span className="clickInput" onClick={() => {
                alert ('Email copié !')}}>cedric.guyot2@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/c%C3%A9dric-guyot-17231b209/" target="_blank" rel="noopener noreferrer">
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
              
            <a href="https://github.com/WalterX85?tab=repositories" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
