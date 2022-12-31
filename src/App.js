import * as React from "react";
import { ethers } from "ethers";
import './App.css';

import Main from "./components/Main";

export default function App() {

  const wave = () => {
    
  }
  
  return (
  <div className="BG"> <Main/>
    <div className="mainContainer">
     
      <div className="dataContainer">
        <div className="header">
        🗻✊🏼🏴󠁧󠁢󠁳󠁣󠁴󠁿🤘🏿
        </div>

        <div className="bio">
        I pledge Allegience to the flag of the United Shippers of Buildspace, and to the transparency for which it stands. Many DAO's, built on the block, immutable, with self-sovereignty for all!
        </div>

        <button className="waveButton" onClick={wave}>
          Salute and #GTFOL 
        </button>
      </div>
      </div>
    </div>
  );
}
