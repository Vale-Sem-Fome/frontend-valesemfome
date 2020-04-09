import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import Footer from './../../components/FormRecipients/Footer';

function PageNotFound() {
    return (
        <div>
            <div className="pagenotfound">
                <div className="container">
                    <header>
                        <img className="img-logo" src={logo} alt="Vale Sem Fome"/>
                        <h1>
                            <strong>
                                404 - Página Não Encontrada
                            </strong>
                        </h1>
                        <p>Mas você tem algumas opções:</p>
                    </header>
                    <main>
                        <div className="row">
                            <div>
                                <Link className="fake-button-route" to="/">
                                    Preciso de Ajuda!
                                </Link>
                            </div>
                            <div>
                                <Link to="/voluntarios">
                                    Quero Ajudar!
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
                </div> 
            <Footer />
        </div>
        
    );
}

export default PageNotFound;