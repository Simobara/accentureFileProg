import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import Products from "../components/Products";
import data, { ProductType } from "../controller/data";
// import { describe } from 'node:test';


// describe("products", () => {
  it('test products component', async () => {
  
    render(<Products products={data} />);
    const cards = await screen.findAllByTestId("product-card");
    expect(cards).toHaveLength(8);
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


// })