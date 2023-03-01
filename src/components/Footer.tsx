import React from 'react'

const Footer = () => {
    return (
        <footer className = "relative bg-gray-800 py-4  flex flex-col min-h-screen border-t border-0" >
            <div className="absolute container m-0 px-4 bottom-0 ">
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <span className="text-gray-400">© 2023 BYO Inc. @All rights reserved.</span>
                </div>
                <div className="w-full sm:w-auto">
                    <ul className="flex flex-wrap list-none justify-end">
                        <li className="mr-4"><a href="## " className="text-gray-400 hover:text-gray-200">Privacy Policy</a></li>
                        <li><a href="## " className="text-gray-400 hover:text-gray-200">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    );
}

export default Footer
