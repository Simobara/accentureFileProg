import React from 'react';
import { useState } from "react";
import { Col, Row } from "reactstrap";
import Select, { SingleValue } from "react-select";
import { options, ProductType } from "../controller/data";
import type { FC } from "react";
import ItemList from "./ItemList";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Footer from "./Footer";
import Header from "./Header";
import { getPriceFromString } from '../helpers/helper';

const Products: FC<{ products: ProductType[] }> = ({ products }) => {

    const [data, setData] = useState(products)
    
    const backup = [...products]

    const onFilterHandler = (newValue: SingleValue<{ label: string; value: string; }>) => {
        if (!newValue) {
            return
        }
        if (newValue.label === "All") {
            setData(products)
        } else {
            const found = products.filter(item => item.type === newValue.label)
            if (found.length > 0) setData(found)
        }
    }


    const searchQueryHandler = (query: any) => {
        if (query !== '') {
            const filtered = data.filter(item => {
                if (item.productName.toUpperCase().includes(query.toUpperCase())) {
                    return item;
                }
                return false;
            })
            setData(filtered)
        } else {
            setData(backup)
        }
    }
    

    // $25.99 =>['$',"25.99"]
    // 25.99

   

    const priceFilter = (from:number,to?:number) => {
        // let filtered: ProductType[] = [];
        if (!to) {
            setData(backup.filter(item => getPriceFromString(item.price)   >= from ))
            return 
        }
        return backup.filter(item => getPriceFromString(item.price) >= from && getPriceFromString(item.price) <= to)
        
        
        // switch () {
        //     case 'Under $10':
        //         filtered = backup.filter(item =>
        //             (getPriceFromString(item.price) < 10))
        //         break;
        //     case '$10 to $15':
        //         filtered = backup.filter(item =>
        //             (getPriceFromString(item.price) >= 10 && getPriceFromString(item.price) <= 15))
        //         break;
        //     case '$15 to $25':
        //         filtered = backup.filter(item =>
        //             (getPriceFromString(item.price) >= 15 && getPriceFromString(item.price) <= 25))
        //         break;
        //     case '$25 to $50':
        //         filtered = backup.filter(item =>
        //             (getPriceFromString(item.price) >= 25 && getPriceFromString(item.price) <= 50))
        //         break;
        //     case '$50 to $100':
        //         filtered = backup.filter(item =>
        //             (getPriceFromString(item.price) >= 50 && getPriceFromString(item.price) <= 100))
        //         break;
        //     case '$100 and Above':
        //         filtered = backup.filter(item =>
        //             (getPriceFromString(item.price) >= 100))
        //         break;
        //     default:
        //         setData(filtered)
        // }
    }


    const categoryFilter = (value: String) => {
        if (value !== '') {
            const filtered = data.filter(item => item.type === value);
            setData(filtered)
        } else {
            setData(backup)
        }
    }

    // const onSaleFilter = ( value: any )=> {
    //     if (value !== '') {
    //         const filtered = data.filter(item => item.isSale === value);
    //     setData(filtered)
    //     } else {
    //         setData(backup)
    //     }
    



    return (

        <>
            <Header />
            <Row className=" border-gray-800 border-[1px] flex fixed z-10 bg-slate-50 items-center justify-center   w-screen" data-testid="product-component ">
                <Col md={6} xl={12}>
                    <div className="p-0 mt-4 mb-4 mr-8 font-bold text-gray-900" data-testid="select-component-wrapper">
                        SEARCH YOUR PRODUCT:
                    </div>
                </Col>
                <Col md={6} xl={12}>
                    {/* <Label className="px-2 w-24 mr-6">Menu </Label> */}
                    {/* <Label for="exampleInput" className="px-2 w-24 mr-6"></Label> */}
                    {/* <Input type="text" name="exampleInput" id="exampleInput" placeholder="Enter some text" /> */}
                    <div className="mt-4 mb-4 font-bold text-gray-700" data-testid="select-component-wrapper">
                        <Select
                            onChange={onFilterHandler}
                            options={options}
                            menuPlacement="auto"
                            menuPosition="fixed"
                            placeholder="by category.."
                        />
                    </div>
                </Col>
                <Col md={6} xl={12} >
                    <div className='top-0 right-0 w-auto p-auto mt-4 mb-0 '>
                        <SearchBar onQuery={searchQueryHandler} />
                    </div>
                </Col>
            </Row>
            <Row className=" bg-gray-800 border-white border-[1px] flex flex-row w-full" >
                <Col md={6} xl={3}>
                    <FilterBar onPrice={priceFilter} onCategory={categoryFilter} />
                </Col>
                <Col md={6} xl={3} >
                    <ItemList data={data} />
                </Col>
            
            </Row>
            <Footer />
        </>
    
    )
}
    export default Products;