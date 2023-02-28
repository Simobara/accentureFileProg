import { useState } from "react";
import { Col, Label, Row } from "reactstrap";
import Select, { SingleValue } from "react-select";
import { options, ProductType } from "../controller/data";
import type { FC } from "react";
import ItemList from "./ItemList";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const Products: FC<{ products: ProductType[] }> = ({ products }) => {

    const [data, setData] = useState(products)
    const [backup,setBackup]= useState(products)

    const onFilterHandler = (newValue: SingleValue<{
        label: string;
        value: string;
    }>) => {
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
            })
    
            setData(filtered)
        } else {
            setData(backup)
        }
    }

    const priceFilter = (value: String) => {
        let filtered = []
            ;       switch (value) {
                case 'Under $10':
                //
                break
            case '$10 to $15':
                //
                break;
            case '$15 to $25':
                //
                break;
            case '$25 to $50':
                //
                break;
            case '$50 to $100':
                //
                break;
            case '$100 and Above':
                //
                break;

        }
    }

    return(
    
    //split in 2 componenti
    //transition sulle card del sale

    <>
        <Row className="border-gray-600 border-[1px] flex fixed z-10 bg-slate-50 w-full" data-testid="product-component">
            <Col md={6} xl={12}>
                <Label className="px-2 w-24">Menu </Label>
                <div className="mb-2 font-bold text-gray-700" data-testid="select-component-wrapper">
                    <Select
                        onChange={onFilterHandler}
                        options={options}
                        menuPlacement="auto"
                        menuPosition="fixed"
                    />
                </div>
            </Col>
            <Col md={6} xl={12} >
                    <div className='top-0 right-0 w-auto bg-gray-200 p-auto mt-4'>
                        <SearchBar onQuery={searchQueryHandler} />    
                    </div>
            </Col>
        </Row>
        <Row className="border-white border-[1px] flex bg-slate-50 w-full" >
            <Col md={5} xl={4} >
                <FilterBar onPrice={priceFilter} />
            </Col>
            <Col md={7} xl={8} >
                <ItemList data={data} />
            </Col>
            
        </Row>
        </>
    )
}

export default Products;
