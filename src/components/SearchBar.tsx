import { useState } from "react";
import { ProductType } from "../controller/data";

import type { FC } from "react";


type Props = {
    onQuery: (value:String) => void;
}


const SearchBar = ({onQuery}:Props) => {
    const [query,setQuery] = useState('')
    const handleInputChange = (event:any) => {
        setQuery(event.target.value)
        onQuery(event.target.value);
        }
        const handleSearch = (event:any) => {
            event.preventDefault();
            onQuery(query);
            // Do something with the search query (e.g. send it to a backend API)
        }
    
    return (
        <div className="flex items-center">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Type here to search...'  onChange={handleInputChange} className="border border-gray-400 rounded-md py-2 px-4 mr-2"/>
                {/* <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button> */}
            </form>
        </div>
    )
}

export default SearchBar
