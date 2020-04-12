import React from 'react';
import { Input } from './../../../index';

function BirthDay(props) {
    return (
        <div className="form-group">
        <div className="inputs-group">
            <label htmlFor="birthday">
                Data de Nascimento: *
            </label>
            {props.errors.birthday && <span className="error-message">Você não preencheu com a sua data de nascimento...</span>}
            <Input
                type="date"
                name="birthday"
                id="birthday"
                ref={props.register({ required: true, maxLength: 10 })} />
        </div>
    </div>
    )
}

export default BirthDay;