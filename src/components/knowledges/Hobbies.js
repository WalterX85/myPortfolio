import React from 'react'
import { MdDirectionsBike } from "react-icons/md";
import { GiTakeMyMoney, GiSpiderWeb } from "react-icons/gi";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";

function Hobbies() {
  return (
      <div className="hobbies">
        <h3>Intérets</h3>
        <ul>
          <li className="hobby">
            <i><MdDirectionsBike/></i>
            <span>VTT</span>
          </li>
          <li className="hobby">
            <i><GiTakeMyMoney /></i>
            <span>Paris sportifs</span>
          </li>
          <li className="hobby">
            <i><GiSpiderWeb /></i>
            <span>Web</span>
          </li>
          <li className="hobby">
            <i><BsFillMusicPlayerFill /></i>
            <span>Musique</span>
          </li>
          <li className="hobby">
            <i><VscGraphLine /></i>
            <span>Trading</span>
          </li>
        </ul>

      </div>
    
  )
}

export default Hobbies

