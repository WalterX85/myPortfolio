import React from 'react'
import Navigation from '../components/Navigation'


function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Cedric Guyot</h1>
          <h2>Développeur ReactJs</h2>
          <div className="pdf">
            <a href="./media/CedricGuyotCV.pdf" target="_blank">Télécharger CV</a>
        
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Home
