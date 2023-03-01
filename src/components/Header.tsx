import React, { useEffect, useState } from 'react'
import Toggle from './Toggle/Toggle'

const Header = () => {

const query = "(max-width: 768px)";
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
        }, [matches]);


    const queryToggle = "(min-width: 468px)";
    const [matchesDim, setMatchesDim] = useState(window.matchMedia(queryToggle).matches);

    useEffect(() => {
        const mediaBtn = window.matchMedia(queryToggle);
        const listener = () => setMatchesDim(mediaBtn.matches);
        mediaBtn.addEventListener("change", listener);
        return () => mediaBtn.removeEventListener("change", listener);
    }, [matchesDim]);




    const [toggled, setToggled] = React.useState(false);
    const handleClick = () => {
    setToggled((prevState) => !prevState);
    };



return (
    <header className="bg-gray-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-white text-lg font-semibold">BYO Inc.</div>
            <main className="l-main bd-container" id="bd-container">
        {
            !matches &&
            <React.Fragment>
            <div className="Main">
                <Toggle toggled={toggled} onClick={handleClick} />
            </div>
            </React.Fragment>
        }
        
        </main>
            <nav>
                <ul className="flex list-none">
                    <li className="mr-6"><a href="# " className="text-gray-400 hover:text-white">Home</a></li>
                    <li className="mr-6"><a href="# " className="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="# " className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header
