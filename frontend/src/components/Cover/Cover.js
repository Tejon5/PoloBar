import React from "react";
import videoFD from "../../Media/videoFD.mp4";
import "./Cover.css";

const Cover = () =>{
    return (
        <div className="cover-container">
            <video className="video" src={videoFD} autoPlay loop muted/>
            <h1>Badger Bar 🦡 </h1>
            <p>The Greatest Bar in the City of B.A.</p>
        </div>

    )
}

export default Cover;