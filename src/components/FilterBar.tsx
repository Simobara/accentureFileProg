import React from 'react';
import './FilterBar.css'

type Props = {
    onPrice: (from:number, to?:number) => void;
    onCategory: (value: string) => void;
    // onSale:(value: boolean) => void;
}

const FilterBar = ({ onPrice, onCategory }: Props) => {
    const categoryHandler = (event: any) => {
        if (event.target.checked) {
            onCategory(event.target.value)
        } else {
            onCategory('')
        }
        return false
        // console.log(event.target.value)
        // onCategory(event.target.value)
    }

    // const saleHandler = (event:any) => {
    //     if (event.target.checked) {
    //         onSale(event.target.value)
    //     }
    // }



    return(
        
            <div className='filter-bar h-400 bg-zinc-100 overflow-y-scroll'>
                SEARCH:
                <div className='filter-bar__prices grid grid-cols-2 gap-3'>
                    <button onClick={() => onPrice(0,10)} className='border-slate-50 p-2'>Under $10</button>
                    <button onClick={() => onPrice(10,15)}>$10 to $15</button>
                    <button onClick={() => onPrice(15,25)}>$15 to $25</button>
                    <button onClick={() => onPrice(25,50)}>$25 to $50</button>
                    <button onClick={() => onPrice(50,100)}>$50 to $100</button>
                    <button onClick={() => onPrice(100)}>$100 and Above</button>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-14'>
                    <label htmlFor='beer' className="inline-flex items-center">Beer</label>
                    <input type="checkbox" value='Beer' id='beer' onChange={categoryHandler} />
                    
                    <label htmlFor='wine' className="inline-flex items-center">Wine</label>
                    <input type="checkbox" value='Wine' id='wine' onChange={categoryHandler} />
                
                    <label htmlFor='spirits' className="inline-flex items-center">Spirits</label>
                    <input type="checkbox" value='Spirits' id='spirits' onChange={categoryHandler} />
                
                    <label htmlFor='cider' className="inline-flex items-center">Cider</label>
                    <input type="checkbox" value='Cider' id='cider' onChange={categoryHandler} />
                    
                    {/* <label htmlFor='cider' className="inline-flex items-center">OurOffers</label>  
                    <input type="checkbox" value='true' id='cider' onChange={saleHandler} /> */}
                </div>
            </div>
    );


}
export default FilterBar;
