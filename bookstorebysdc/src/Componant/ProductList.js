import React from 'react'
import Product from './Product'

const parcelProduct = [
    {
        "ProductName": "Packing Packet",
        "Product_img": "https://m.media-amazon.com/images/I/61ygzZwwo1L._SX425_.jpg",
        "Amount": 20
    },
    {
        "ProductName": "Parcel Box",
        "Product_img": "https://m.media-amazon.com/images/I/31fjigJTPPL.jpg",
        "Amount": 10
    },
    {
        "ProductName": "Big Parcel Box",
        "Product_img": "https://m.media-amazon.com/images/I/31BtMbUNGvL.jpg",
        "Amount": 15
    },
    {
        "ProductName": "Thermal Label",
        "Product_img": "https://m.media-amazon.com/images/I/71SbFn8k3GL._SX355_.jpg",
        "Amount": 6
    },
    {
        "ProductName": "Bubble Wrap",
        "Product_img": "https://m.media-amazon.com/images/I/41QA8-j4zDL.jpg",
        "Amount": 2
    },
    {
        "ProductName": "BOPP Tape",
        "Product_img": "https://m.media-amazon.com/images/I/61Iy5TYmlWL._SX466_.jpg",
        "Amount": 50
    },
    {
        "ProductName": "Small Box",
        "Product_img": "https://m.media-amazon.com/images/I/51fypXJ-HVL._SY355_.jpg",
        "Amount": 7
    },
    {
        "ProductName": "Pouch",
        "Product_img": "https://m.media-amazon.com/images/I/618k0icNv2L._SX522_.jpg",
        "Amount": 2
    },
    {
        "ProductName": "Packet",
        "Product_img": "https://m.media-amazon.com/images/I/61ygzZwwo1L._SX425_.jpg",
        "Amount": 19.99
    },
    {
        "ProductName": "Card box",
        "Product_img": "https://m.media-amazon.com/images/I/31fjigJTPPL.jpg",
        "Amount": 24.99
    },
    {
        "ProductName": "Box Horizontally",
        "Product_img": "https://m.media-amazon.com/images/I/31BtMbUNGvL.jpg",
        "Amount": 11.49
    },
    {
        "ProductName": "BOPP Tape",
        "Product_img": "https://m.media-amazon.com/images/I/71SbFn8k3GL._SX355_.jpg",
        "Amount": 16.99
    }   
]


const ProductList = () => {
    return (
        <div className="flex flex-wrap justify-center">
        {parcelProduct.map((ele, idx) => (
          <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <Product
              idx={idx + 1}
              ProductName={ele.ProductName}
              Product_img={ele.Product_img}
              Amount={ele.Amount}
            />
          </div>
        ))}
      </div>
    )
}

export default ProductList
