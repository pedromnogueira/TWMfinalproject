import React, { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import todos_produtos from "../Components/Assets/todos-produtos"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrum/Breadcrum"
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"

const Product = () => {
    const{todos_produtos} = useContext(ShopContext);
    const{productId}=useParams();
    const product = todos_produtos.find((e)=> e.id === Number(productId)); 
    return (
        <div className="">
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
        </div>
    )
}
export default Product