import React, { useContext } from "react"
import './ProductDisplay.css'
import { ShopContext } from "../../Context/ShopContext"

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt= ""/>
                    <img src={product.image} alt= ""/>
                    <img src={product.image} alt= ""/>
                    <img src={product.image} alt= ""/>
                </div>
                <div className="productDisplay-img">
                    <img className="Main-img" src={product.image} alt= ""/>
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-price">
                    R${product.price}
                </div>
                <div className="productDisplay-right-description">
                    {product.description}
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADICIONAR AO CARRINHO</button>
            </div>
            
        </div>
    )
}
export default ProductDisplay;