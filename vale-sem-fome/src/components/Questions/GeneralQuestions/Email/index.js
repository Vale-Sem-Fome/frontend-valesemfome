import React from 'react';
import {
    Input,
    FakeGroupButton
} from './../../../index';

function Email(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                {props.errors.email && <span className="error-message">Você precisa digitar um e-mail válido...</span>}
                <label htmlFor="email">
                    <span className="question-number">{props.question.number}.</span> Qual é o seu e-mail?
                </label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Responda aqui..."
                    ref={props.register()} />
                <label htmlFor="email" className="optional-field">Esse campo é opcional.</label>
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    )
}

export default Email;