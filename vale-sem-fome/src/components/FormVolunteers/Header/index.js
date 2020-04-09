import React from 'react'
import logo from '../../../assets/images/logo.png'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logos">
                    <img className="img-logo" src={logo} alt="sjc sem fome e regeneração global" />
                </div>
                <section>
                    <div className="text">
                        <h1>
                            CADASTRO DE VOLUNTÁRIOS PARA KITS E ENTREGAS
                            MOVIMENTO COVID19 SJC SEM FOME
                        </h1>
                        <p>
                            <strong>Importante:</strong> Precisamos de ajuda de novos voluntários para 
                            montagens dos kits de alimentos e também para realização de 
                            entregas porta a porta.
                        </p>
                    </div>
                </section>
                <div className="fake-button">
                    <a href="#form">Ajudar!</a>
                </div>
            </div>
        </header>
    )
}
