import { FC } from "react";
import { Col, Label, Row } from "reactstrap";
import { ProductType } from "../controller/data";
import FilterBar from "./FilterBar";

const ItemList:FC<{data:ProductType[]}> = ({ data } ) => {
    return (
        <Row className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-10 lg:gap-8 xl:gap-8 w-full mx-auto max-w-[90%] m-10 '>
          
                
            {
                data.map((item:any) =>
                    <Col lg={3} md={6} key={item.index} data-testid="product-card">
                        <div className='w-30 h-30 rounded-lg flex flex-col bg-white shadow-md shadow-black max-w-sm sm:max-w-none mx-auto relative hover:scale-105'>
                            {item.isSale &&
                                <Label
                                    className='absolute bottom-40 left-0 w-20 h-20 bg-red-600  text-yellow-300 rounded-full text-white px-4 py-1 text-xl font-bold uppercase -rotate-12 -translate-y-2 '>
                                    on
                                    Sale
                                </Label>}
                            <div className="w-full aspect-square rounded-t-lg overflow-hidden">
                                <img
                                    src={item.productImage}
                                    className='mx-auto mt-20 w-70 h-70 cursor-pointer'
                                    alt={'img-product'} />
                            </div>
                            <div className = ' '>
                                <div className='bg-orange-200 m-0 p-0 sm:p-3 flex-1 justify-between items-center space-x-2 mt-4 mb-4'>
                                    <div className='m-0 p-0 text-xl leading-8 font-heading font-medium'>
                                        <h6>{item.productName}</h6>
                                        <h4>{item.price}</h4>
                                    </div>
                                </div>
                                {/* <p>{item.desc.substring(0, 100)}...</p> */}
                            </div>
                        </div>
                    </Col>
                )
            }
        </Row>
    )
}

export default ItemList;