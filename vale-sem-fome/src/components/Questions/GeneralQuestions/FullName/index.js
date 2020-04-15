import React from 'react';
import {
    Input,
    FakeGroupButton
} from '../../../index';

function FullName(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label htmlFor="full-name">
                    <span className="question-number">{props.question.number}.</span> Qual seu nome completo? *
                </label>
                {props.errors.fullName && <span className="error-message">É necessário digitar seu nome completo!</span>}
                <Input
                    name="fullName"
                    type="text"
                    id="full-name"
                    placeholder="Responda aqui..."
                    ref={props.register({ required: true })}
                />
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    );
}

export default FullName;