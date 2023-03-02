import React from 'react';
import { useState } from "react";

type Props = {
    onQuery: (value: string) => void;
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
        }
    
    return (
        <div className="first-letter:px-0 border-blue-500 text-l">
            <form onSubmit={handleSearch} className="">
                <input type="text" placeholder='by name..'  onChange={handleInputChange} className="border border-blue-400 rounded-md p-2 w-full"/>
            </form>
        </div>
    )
}

export default SearchBar
