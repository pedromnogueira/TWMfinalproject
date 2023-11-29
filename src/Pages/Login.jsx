import React, { useState } from "react"
import './CSS/Login.css'

const Login = () => {

    const[Cname,setCname]=useState('');
    const[Cemail,setCemail]=useState('');
    const[Cpassword,setCpassword]=useState();
    const[Caddre,setCaddre]=useState('');
    const[Ccep,setCcep]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const client = {Cname,Cemail,Cpassword,Caddre,Ccep};
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {"Content-Type":"aplication/json"},
            body: JSON.stringify(client)
        }).then(() =>{
            console.log(client);
            console.log('Cliente Adicionado');
        })
    }

    return (
        <div className="loginreg">
            <div className="login-cont">
                <h1>Faça o Registro</h1>
                <form onSubmit={handleSubmit}>
                <div className="sign-fields">
                    <input type="text" required value={Cname} onChange={(e)=>setCname(e.target.value)} placeholder="Seu Nome" autoComplete="name"/>
                    <input type="email"required value={Cemail} onChange={(e)=>setCemail(e.target.value)} placeholder="Seu Email" autoComplete="email"/>
                    <input type="password" required value={Cpassword} onChange={(e)=>setCpassword(e.target.value)} placeholder="Senha"/>
                    <input type="text" required value={Caddre} onChange={(e)=>setCaddre(e.target.value)} id="street-address" name="street-address" autoComplete="street-address" placeholder="Seu endereço"></input>
                    <input class="postal-code" required value={Ccep} onChange={(e)=>setCcep(e.target.value)} id="postal-code" name="postal-code" autoComplete="postal-code" placeholder="CEP"></input>
                </div>
                <button>Continuar</button>
                </form>
                <p className="login-field">Já Possui Uma Conta? <span>Faça Seu Login Aqui!</span></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>Concordo com os termos de uso e privacidade</p>
                </div>
            </div>
        </div>
    )
}
export default Login