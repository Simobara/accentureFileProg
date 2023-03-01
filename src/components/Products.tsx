import React from 'react';
import { useState } from "react";
import { Col, Row } from "reactstrap";
import { SingleValue } from "react-select";
import { ProductType } from "../controller/data";
import type { FC } from "react";
import ItemList from "./ItemList";
import Header from "./Header";

const Products: FC<{ products: ProductType[] }> = ({ products }) => {
    const [data, setData] = useState(products)
    const allProducts = [...products]
    const searchQueryHandler = (query: any) => {
        if (query !== '') {
            const filtered = allProducts.filter(item => {
                if (item.productName.toUpperCase().includes(query.toUpperCase())) {
                    return item;
                }
                return false;
            })
            setData(filtered)
        } else {
            setData(allProducts)
        }
    }

    const categoryFilter = (value: SingleValue<{ label: string; value: string; }>) => {
        if (!value) {
            return
        }
        if (value.label === "All") {
            setData(allProducts)
        } else {
            const found = products.filter(item => item.type === value.label)
            if (found.length > 0) setData(found)
        }
    }

    return (
        <>
            <Header onCategory={categoryFilter} onSearch={searchQueryHandler} />
            <Row className=" bg-gray-800 border-white border-[1px] flex flex-row w-screen justify-center flex" >
                <Col md={4} xl={3} >
                    <ItemList data={data} />
                </Col>
            </Row>
            {/* <Footer /> */}
        </>
    )
}
export default Products;