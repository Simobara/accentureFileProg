import { useState } from "react";
import { Col, Label, Row } from "reactstrap";
import Select from "react-select";
import { options, ProductType } from "../controller/data";
import type { FC } from "react";

const Products: FC<{ products: ProductType[] }> = ({ products }) => {

    const [data, setData] = useState(products)

    const onFilterHandler = (e: any) => {
        if (e.label === "All") {
            setData(products)
        } else {
            const found = products.filter(item => item.type === e.label)
            if (found.length > 0) setData(found)
        }
    }

    return(
    
    <>
        <Row className="border-gray-600 border-[1px]" data-testid="product-component">
            <Col md={8} />
            <Col md={4} className="flex">
                <Label className="px-2 w-24">Filter by: </Label>
                <div className="w-full" data-testid="select-component-wrapper">
                    <Select
                        onChange={onFilterHandler}
                        options={options}
                        menuPlacement="auto"
                        menuPosition="fixed"
                    />
                </div>
            </Col>
        </Row>

        <Row className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-10 lg:gap-8 xl:gap-8 w-full mx-auto max-w-[90%] m-10 '>
            {
                data.map((item, id) =>
                    <Col lg={3} md={6} key={id} data-testid="product-card">
                        <div className='w-30 h-30 rounded-lg flex flex-col bg-white shadow-md shadow-black max-w-sm sm:max-w-none mx-auto relative hover:scale-105'>
                            {item.isSale && <Label className='absolute top-10 left-10 w-20 h-20 bg-red-600 text-white px-2 py-1 text-xl font-bold uppercase -rotate-12 -translate-y-2 '>Sale!!!</Label>}
                            <div className="w-full aspect-square rounded-t-lg overflow-hidden">
                                <img src={item.productImage} className='mx-auto object-cover w-full h-full cursor-pointer' alt={'img-product'} />
                                </div>
                            <div className='lex p-3 sm:p-5 flex-1 justify-between items-center space-x-2'>
                                <div className='text-xl leading-8 font-heading font-medium'>
                                    <h6>{item.productName}</h6>
                                    <h4>{item.price}</h4>
                                </div>
                                <p>{item.desc.substring(0, 100)}...</p>
                            </div>
                        </div>
                    </Col>
                )
            }
        </Row>
        </>
    )
}

export default Products;
