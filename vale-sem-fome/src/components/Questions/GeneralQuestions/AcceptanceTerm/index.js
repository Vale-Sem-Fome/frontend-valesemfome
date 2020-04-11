import React from 'react';
import { Input } from './../../../index';

function AcceptanceTerm(props) {
    return (
        <div className="form-group" id="agreement">
        <div className="inputs-group">
            <div className="link">
                <a href="#question1">Revisar minhas Repostas</a>
            </div>
            <section>
                <h3>TERMO DE ACEITE</h3>
                <p>
                    Autorizo receber mensagens com informações e questões sobre
                    <strong> MOVIMENTO COVID19 SJC SEM FOME</strong> e que meus dados sejam armazenados
                    para fins estatísticos nos termos da Lei Geral de Proteção de Dados. *
                </p>
            </section>
            {props.errors.termsAgreements && <span className="error-message">Campo obrigatório...</span>}
            <div className="all-options">
                <div className="option">
                    <Input
                        type="radio"
                        name="termsAgreements"
                        id="agree"
                        value="Aceito"
                        ref={props.register({ required: true })} />
                    <label htmlFor="agree"> Aceito</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="termsAgreements"
                        id="not-agree"
                        value="Não aceito"
                        ref={props.register({ required: true })} />
                    <label htmlFor="not-agree"> Não Aceito</label>
                </div>
            </div>
            <div className="form-buttons" id="send-answer">
                <Input name="button" type="submit" value="Enviar" />
            </div>
        </div>
    </div>
    )
}

export default AcceptanceTerm;