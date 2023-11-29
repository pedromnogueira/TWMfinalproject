import React from "react"
import './Item.css'
import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt = ""></img></Link>
            <p>{props.name}</p>
            <div className="item-price">
                <p>R${props.price}</p>
            </div>
        </div>       
    )
}
export default Item