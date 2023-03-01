import React from 'react'
import Select, { SingleValue } from "react-select";
import { options} from "../controller/data";
import SearchBar from "./SearchBar";

type Props = {
    onSearch: (value: string) => void;
    onCategory: (newValue: SingleValue<{ label: string; value: string; }>) => void
}

const Header = ({ onSearch, onCategory }: Props) => {
    const searchQueryHandler = (query: any) => {
        onSearch(query);
    }
    const onFilterHandler = (newValue: SingleValue<{ label: string; value: string; }>) => {
        onCategory(newValue)
    }
    return (
        <header className="bg-gray-800 fixed z-10 w-screen">
            <div className="flex flex-row pt-3 justify-between lg:mb-0 lg:mr-4 md:ml-auto">
                <div className="text-white ml-20 text-lg font-semibold">
                    BYO Inc.
                </div>
                <nav>
                    <ul className="flex list-none">
                        <li className="mr-20"><a href="https://github.com/Simobara" className="w-4 text-gray-400 hover:text-white">
                        My Github Profile</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className="flex flex-col lg:flex-row  lg:mb-auto min-w-max mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-12 "> 
                <div className="text-white font-bold">
                CHOOSE PRODUCT:
                </div>
            
                <div className="w-full mb-8 mr-8 lg:ml-4">
                    <div className="container">
                    <Select
                        onChange={onFilterHandler}
                        options={options}
                        menuPlacement="auto"
                        menuPosition="fixed"
                        placeholder="by Category.."
                    />
                    </div>
                </div>
                <div className="w-full">
                    <div className="container"
                        data-testid="select-component-wrapper">
                    <SearchBar onQuery={searchQueryHandler} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
