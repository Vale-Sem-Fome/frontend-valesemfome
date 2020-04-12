import React from 'react';
import { Input } from './../../../index';

function Email(props) {
    return (
        <div className="form-group">
        <div className="inputs-group">
            {props.errors.email && <span className="error-message">Você precisa digitar um e-mail válido...</span>}
            <label htmlFor="email">
                Qual é o seu e-mail?
            </label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Responda aqui..."
                ref={props.register()} />
            <label htmlFor="email" className="optional-field">Esse campo é opcional.</label>
        </div>
    </div>
    )
}

export default Email;