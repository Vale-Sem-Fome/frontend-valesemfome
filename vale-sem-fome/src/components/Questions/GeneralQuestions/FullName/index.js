import React from 'react';
import { 
    Input
} from '../../../index';

function FullName(props) {
    return (
        <div className="form-group">
            <div className="inputs-group">
                <label htmlFor="full-name">
                    Qual seu nome completo? *
                </label>
                {props.errors.fullName && <span className="error-message">É necessário digitar seu nome completo!</span>}
                <Input
                    name="fullName"
                    type="text"
                    id="full-name"
                    placeholder="Responda aqui..."
                    ref={props.register({ required: true })} 
                />
            </div>
        </div>
    );
}

export default FullName;