import { useState } from "react";
import { Col, Label, Row } from "reactstrap";
import Select from "react-select";
import { options, ProductType } from "../controller/data";
import type { FC } from "react";

const Products: FC<{ products: ProductType[] }> = ({ products }) => {

    const [data, setData] = useState(products)

    const onFilterHandler = (e: any) => {
        if (e.label === "*") {
            setData(products)
        } else {
            const found = products.filter(item => item.type === e.label)
            if (found.length > 0) setData(found)
        }
    }

    return(
    
    <>
        <Row className="border-gray-600 border-[1px]">
            <Col md={8} />
            <Col md={4} className="flex">
                <Label className="px-2 w-24">Filter by: </Label>
                <div className="w-full">
                    <Select
                        onChange={onFilterHandler}
                        options={options}
                        menuPlacement="auto"
                        menuPosition="fixed"
                    />
                </div>
            </Col>
        </Row>

        <Row className='px-2 border-gray-600 border-[1px] rounded-md'>
            {
                data.map((item, i) =>
                    <Col lg={3} md={6} key={i}>
                        <div className={'product-card'}>
                            {item.isSale && <Label className={'lbl-sale'}>Sale</Label>}
                            <img src={item.productImage} className={'img-product'} alt={'img-product'} />
                            <div className={'card-bottom'}>
                                <div className={'bottom-section'}>
                                    <h6>{item.productName}</h6>
                                    <h4>{item.price}</h4>
                                </div>
                                <p>{item.desc.substr(0, 100)}...</p>
                            </div>
                        </div>
                    </Col>)
            }
        </Row>
        </>
    )
}

export default Products;
