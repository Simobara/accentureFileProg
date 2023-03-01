import React from "react";
import "./ToggleButton.css";
import Toggle from "./Toggle/Toggle";

function ToggleButton() {
    const [toggled, setToggled] = React.useState(false);

    const handleClick = () => {
        setToggled((prevState) => !prevState);
    };

    return (
        <div className="Main">
            <Toggle toggled={toggled} onClick={handleClick} />
        </div>
    );
}

export default ToggleButton;
