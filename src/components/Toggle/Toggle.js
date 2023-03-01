import React from "react";
import "./Toggle.css";


export default function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick}

            className={`day ${!toggled ? "" : "night"}`}>

            {/* <div className="resize__button"> */}
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
        // </div >
    );
}
