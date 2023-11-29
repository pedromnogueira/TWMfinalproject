import React from "react"
import wheyim from "../Assets/Whey-removebg-preview.png"
import './Fpage.css'

const Fpage = () => {
    return (
        <div className="fpage">
            <div className="fpage-left">
                <h2>Sejam bem Vindos!</h2>
                <div className="hand-icon">
                    <p>Ótimos Preços</p> 
                </div>                           
                <p>Para Todos!</p>
            </div>
            <div className="fpage-right">
                <img src ={wheyim} alt=""/>
            </div>
        </div>
    )
}
export default Fpage