import React from 'react';
import {
    InputMask,
    FakeGroupButton
} from './../../../index';

function PhoneNumber(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label htmlFor="whatsapp">
                    <span className="question-number">{props.question.number}.</span> Qual é o seu telefone de contato (WhatsApp)? *
            </label>
                {props.errors.phone && <span className="error-message">Digite um número de telefone válido...</span>}
                <InputMask
                    type="text"
                    name="phone"
                    id="whatsapp"
                    mask="(99) 99999-9999"
                    placeholder="(12) 99111-1111"
                    inputRef={props.register({ required: true, minLength: 14, maxLength: 15 })} />
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    )
}

export default PhoneNumber;