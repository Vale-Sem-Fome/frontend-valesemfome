import React from 'react';
import { InputMask } from './../../../index';

function Document(props) {
    return (
        <div className="form-group">
            <div className="inputs-group">
                <label htmlFor="cpf">
                    Qual é o seu CPF? (11 dígitos) *
                </label>
                {props.errors.document && <span className="error-message">Campo Obrigatório. Digitar seu CPF:</span>}
                <InputMask
                    type="text"
                    name="document"
                    id="cpf"
                    placeholder="000.111.222-33"
                    mask="999.999.999-99"
                    inputRef={props.register({ required: true, minLength: 11, maxLength: 14 })} 
                />
            </div>
        </div>
    )
}

export default Document;