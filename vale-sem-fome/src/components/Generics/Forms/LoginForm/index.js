import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Input
} from './../../../index';
import './login-form.scss';
import logo from './../../../../assets/images/logo-sjc-sem-fome.jpeg';

function LoginForm(){

    const [passwordVisibility, setPasswordVisibility] = useState("password");
    const [changeicon, setIconInvisibility] = useState("eye");

    // function toogleIconInvisibility(){
    //     changeicon === "eye" ?
    //     setIconInvisibility("eye-off") :
    //     setIconInvisibility ("eye");
    // }

    function toogleVisibility() {

        if(passwordVisibility === "password" && changeicon === "eye"){
            setPasswordVisibility("text");
            setIconInvisibility("eye-off");
        } else{
            setPasswordVisibility("password");
            setIconInvisibility("eye");
        }
  
    }


    return (
        <div className="login-form-container">
            <div className="container-image-login">
                <img src={logo} alt="SJC sem Fome"/>
            </div>
        <form className="form-login">
            <div className="login-input-group">
                <label htmlFor="input-login" hidden>Login: </label>
                <div className="input-icon-login">
                    <ion-icon name="person"></ion-icon>
                    <Input 
                        type="email"
                        placeholder="e-mail"
                        id="input-login"
                        />
                </div>
                </div>
            <div className="login-input-group">
                <label htmlFor="input-password" hidden>Senha: </label>
                <div className="input-icon-login">
                    <ion-icon name="lock-closed"></ion-icon>
                    <Input 
                        type={ passwordVisibility }
                        placeholder="senha"
                        id="input-password" />
                    <ion-icon name={changeicon} onClick={() => toogleVisibility()}></ion-icon>
                </div>
            </div>
            <div className="login-button-group">
                <Input 
                    type="submit"
                    value="Entrar"
                />
                <Link to="/" className="login-link">esqueci minha senha!</Link>
            </div>
            </form>
        </div>
    )
}

export default LoginForm;