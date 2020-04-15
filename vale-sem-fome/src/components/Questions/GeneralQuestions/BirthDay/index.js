import React from 'react';
import {
    Input,
    FakeGroupButton
} from './../../../index';

function BirthDay(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label htmlFor="birthday">
                    <span className="question-number">{props.question.number}.</span> Data de Nascimento: *
            </label>
                {props.errors.birthday && <span className="error-message">Você não preencheu com a sua data de nascimento...</span>}
                <Input
                    type="date"
                    name="birthday"
                    id="birthday"
                    ref={props.register({ required: true, maxLength: 10 })} />
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    )
}

export default BirthDay;