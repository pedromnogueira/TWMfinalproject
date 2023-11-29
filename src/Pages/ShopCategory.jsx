import React, { useContext } from "react"
import "./CSS/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext"
import todos_produtos from "../Components/Assets/todos-produtos"
import Item from "../Components/Item/Item"
import dropicon from "../Components/Assets/Assets2/dropdown_icon.png"

const ShopCategory = (props) => {
    const {todos_produtos} = useContext(ShopContext)
    return (
        <div className="shop-category">
            <img className="shop-banner" src={props.banner} alt = ""/>
            <div className="shop-indexSort">
                <p>
                    <span>Mostrando 1-12</span> de 30 produtos
                </p>
                <div className="shopcat-sort">
                    Mostrar por <img src={dropicon} alt=""/>
                </div>
                </div>
                <div className="shopcat-prod">
                    {todos_produtos.map((item,i) => {
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                    }
                    else{
                        return null;
                    }
                })}
                </div>           
        </div>
    )
}
export default ShopCategory