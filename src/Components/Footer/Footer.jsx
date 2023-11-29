import React from "react"
import logo from '../Assets/braco_logo.png'
import insta from '../Assets/Assets2/instagram_icon.png'
import pint from '../Assets/Assets2/pintester_icon.png'
import zap from '../Assets/Assets2/whatsapp_icon.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt = ""></img>
                <p>SUPLESHOP</p>
            </div>
            <ul className="footer-links">
                <li>Empresa</li>
                <li>Produtos</li>
                <li>Offices</li>
                <li>Sobre</li>
                <li>Contato</li> 
            </ul>
            <div className="footer-sicons">
                <div className="footer-sicons-cont">
                    <img src={insta} alt=""/>
                </div>
                <div className="footer-sicons-cont">
                    <img src={pint} alt=""/>
                </div>
                <div className="footer-sicons-cont">
                    <img src={zap} alt=""/>
                </div>
            </div>
                <div className="footer-copy">
                    <hr/>
                    <p>Copyright @ 2023 - Todos Direitos Reservados.</p>
                </div>
        </div>
    )
}
export default Footer