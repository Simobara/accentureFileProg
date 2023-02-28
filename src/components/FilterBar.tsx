import React from 'react'
import './FilterBar.css'

type Props = {
    onPrice: (value:String) => void;
}

const FilterBar = ({onPrice}:Props) => {

    const priceHandler = (event: any) => {
        console.log(event.target.textContent)
        onPrice(event.target.textContent)
    }
return (
    <div className='filter-bar w-30 h-full border-slate-50 mt-10'>
        <div className='filter-bar__prices grid grid-cols-2 gap-3'>
            <button onClick={priceHandler} className='border-slate-50 p-2'>Under $10</button>
            <button onClick={priceHandler}>$10 to $15</button>
            <button onClick={priceHandler}>$15 to $25</button>
            <button onClick={priceHandler}>$25 to $50</button>
            <button onClick={priceHandler}>$50 to $100</button>
            <button onClick={priceHandler}>$100 and Above</button>
        </div>
    </div>
)
}

export default FilterBar
