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
                        <h1>CADASTRO DE FAMÍLIAS</h1>
                        <h3>MOVIMENTO COVID19 SJC SEM FOME</h3>
                        <p>
                            <strong>Importante:</strong> este cadastro não garante o
                                recebimento dos alimentos, mas vamos
                                nos esforçar ao máximo para atender a todos.
                            </p>
                    </div>
                </section>
                <div className="fake-button">
                    <a href="#form">Começar!</a>
                </div>
            </div>
        </header>
    )
}
