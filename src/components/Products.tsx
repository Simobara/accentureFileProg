import { useState } from "react";
import { Col, Label, Row } from "reactstrap";
import Select from "react-select";
import { options, ProductType } from "../controller/data";
import type { FC } from "react";

const Products: FC<{ products: ProductType[] }> = ({ products }) => {
     // eslint-disable-next-line
    const [tempData, setTempData] = useState(products)

    const [data, setData] = useState(products)

    const onFilterHandler = (e: any) => {
        if (e.value === null) {
            setData(tempData)
        } else {
            const found = tempData.filter(item => item.type === e.value)
            if (found.length > 0) setData(found)
        }
    }

    return(
    
    <>
        <Row className="border-gray-600 border-[1px]">
            <Col md={8} />
            <Col md={4} className={'filter-form'}>
                <Label>Filter by: </Label>
                <div className={'cp-select'}>
                    <Select
                        onChange={onFilterHandler}
                        options={options}
                        menuPlacement="auto"
                        menuPosition="fixed"
                    />
                </div>
            </Col>
        </Row>

        <Row className={'product-section'}>
            {
                data.map((item, i) =>
                    <Col lg={3} md={6}>
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
