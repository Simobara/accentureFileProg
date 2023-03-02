const data = [
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
    }, {
        "index": 2,
        "isSale": false,
        "price": "$24.99",
        "productImage": "https://imagevault.skulibrary.com/ColesLiquor/NoPrefix/e2520ee2b408c79be0916bdd062e372f1423c031/images/2400/id/CLG-539920-1.jpg",
        "productName": "Kirin Megumi 4x6x330ml",
        "type": "Beer"
    },
    {
        "index": 3,
        "isSale": true,
        "price": "$4.99",
        "productImage": "https://assets.untappd.com/photo/2020_04_04/018e047d9db9f5d088a078d7454b7f28_c_883566471_640x640.jpg",
        "productName": "Panhead CH Johnny Octane Can",
        "type": "Beer"
    },
    {
        "index": 4,
        "isSale": false,
        "price": "$25.99",
        "productImage": "https://vintagedirect.files.wordpress.com/2022/09/spark.jpg",
        "productName": "Aquila Spark SauvB Bottle",
        "type": "Wine"
    },
    {
        "index": 5,
        "isSale": true,
        "price": "$29.99",
        "productImage": "https://images4-cdn.auctionmobility.com/is3/auctionmobility-static4/fmZ8-4-DFLN2//10.jpg",
        "productName": "Bernadino Spumante Bottle",
        "type": "Wine"
    },
    {
        "index": 6,
        "isSale": true,
        "price": "$69.99",
        "productImage": "https://drinkstack.com/wp-content/uploads/2022/04/grey-goose-vodka-price.jpg",
        "productName": "Grey Goose Orginal 10x12x50ml",
        "type": "Spirits"
    },
    {
        "index": 7,
        "isSale": false,
        "price": "$49.99",
        "productImage": "https://drinkland.co.nz/wp-content/uploads/2020/10/Scrumpy-Ginger-Cider-8.2-1.25-Litre-02.jpg",
        "productName": "Scrumpy RBerry 6x1.25L",
        "type": "Cider"
    }
]

const Product = data[0];
export type ProductType = typeof Product;

const tmp = [...data.map(item =>({ label: item.type, value: item.productName })), { label: "All", value: "All" }];

export const options = tmp.filter((tag, index, array) => array.findIndex(t => t.label === tag.label) === index);

export default data;