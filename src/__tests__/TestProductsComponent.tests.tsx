import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import Products from "../components/Products";
import data, { ProductType } from "../controller/data";


describe("products", () => {
  it('test products component', async () => {
  
    render(<Products products={[
      {
        "index": 0,
        "isSale": false,
        "price": "$49.99",
        "productImage": "https://www.firstchoiceliquor.com.au/-/media/images/products/generic_bundle.ashx?h=520&productId=4296791_CTN24",
        "productName": "Pure Blonde Crate",
        "type": "Beer"
    },
    {
        "index": 1,
        "isSale": true,
        "price": "$14.99",
        "productImage": "https://imagevault.skulibrary.com/ColesLiquor/NoPrefix/e2520ee2b408c79be0916bdd062e372f1423c031/images/2400/id/CLG-10016-0.jpg",
        "productName": "Victoria Bitter 4x6x375ml",
        "type": "Beer"
    }
    ]} />);
    const cards = await screen.findAllByTestId("product-card");
    expect(cards).toHaveLength(2);
  });
  
  it("test search bar", async () => {
    render(<Products products={data} />);
  
    // eslint-disable-next-line testing-library/no-node-access
    const SelectComponent = (await screen.findByTestId("select-component-wrapper")).firstChild;
    expect(SelectComponent).toBeDefined();
    expect(SelectComponent).not.toBeNull();
  
    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.keyDown(SelectComponent?.firstChild as Node, { key: 'ArrowDown' });
    const beer = await screen.findByText('Beer');
    fireEvent.click(beer);
  
    await new Promise((res, reject) => setTimeout(() => { res(0) }, 500));
    const cards = await screen.findAllByTestId("product-card");
    expect(cards).toHaveLength(4);
})


})