import React, { Component } from 'react';
import ProgressBar from './ProgressBar'



class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "Javascript", xp: 1.4},
      {id: 3, value: "CSS", xp: 2},
      {id: 4, value: "NodeJs", xp: 0.8}
    ],
    frameworks: [
      {id: 1, value: "React", xp: 1.2},
      {id: 1, value: "Express", xp: 0.8},
      {id: 1, value: "Sass", xp: 0.4},
    ]
  }


  render() {
    let {languages, frameworks} = this.state;


    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
