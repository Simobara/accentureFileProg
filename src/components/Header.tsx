import React from 'react'

const Header = () => {
return (
    <header className="bg-gray-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-white text-lg font-semibold">BYO Inc.</div>
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
