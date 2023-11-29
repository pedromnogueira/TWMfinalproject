import React, { useContext } from "react"
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext"
import removeIcon from "../Assets/Assets2/cart_cross_icon.png"

const CartItems = () => {
    const {todos_produtos,cartItems,removeFromCart,getTotal} = useContext(ShopContext);
    
    return (
        <div className="cartItems">
            <div className="cartItems-format-main">
                <p>Produtos</p>
                <p>Nome</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr/>
            {todos_produtos.map((e) => {
                if(cartItems[e.id]>0)
                {
                return <div>
                <div className="Cart-items-format cartItems-format-main">
                <img src={e.image} alt="" className="item-img-ic"/>
                <p>{e.name}</p>
                <p>R${e.price}</p>
                <button className="cartitems-quant">{cartItems[e.id]}</button>
                <p>R${e.price*cartItems[e.id]}</p>
                <img src = {removeIcon}  className="remove-item" onClick={()=>{removeFromCart(e.id)}} alt=""/>
                </div>
                <hr/>
                </div>
                }
                return null;
            })}
            <div className="cartitemsdown">
                <div className="cartitemstotal">
                    <h1>Total no Carrinho</h1>
                    <div>
                        <div className="cartitemtotal-item">
                            <p>Subtotal</p>
                            <p>RS{getTotal()}</p>
                        </div>
                        <hr/>
                        <div className="cartitemtotal-item">
                            <p>Taxa de Entrega:</p>
                            <p>Grátis</p>
                        </div>
                        <hr/>
                        <div className="cartitemtotal-item">
                            <h3>Total: </h3>
                            <h3>R${getTotal()}</h3>
                        </div>
                    </div>
                    <button>FAZER O PAGAMENTO.</button>
                </div>    
            </div>           
        </div>
    )
}
export default CartItems