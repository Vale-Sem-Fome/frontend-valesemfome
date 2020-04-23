import React from 'react';
import logo from './../../../../assets/images/logo-sjc-sem-fome.jpeg';
import './city-header.scss'

function CityHeader({ cityName }) {
    return (
        <div>
            <header className="header-page">
                <div className="container">
                    <div className="header-logo">
                        <img className="img-fluid" src={logo} alt="Logo SJC Sem Fome"/>
                    </div>
                    <div className="header-title">
                        <h1>Dados dos Beneficiários</h1>
                        <p>{cityName}</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default CityHeader;