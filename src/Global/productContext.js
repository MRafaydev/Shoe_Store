import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from "../assets/shoe1.jpg";
import headphones from "../assets/shoe2.jpg"
import microphone from "../assets/shoe3.jpg"
import rings from "../assets/shoe4.jpg"
import shoes from "../assets/shoe5.jpg"
import watch from "../assets/shoe6.jpg"
import perfum from "../assets/shoe7.jpg"
import dslr from "../assets/shoe8.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;