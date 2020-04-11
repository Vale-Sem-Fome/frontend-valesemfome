import React from 'react';
import { Input } from './../../../../../index';

function PreviousRegister(props) {
    return (
        <div className="form-group" id="question10">
        <div className="inputs-group">
            <label>
                Por último, você (sua família) já possuem cadastro único? *
            </label>
            {props.errors.haveRegistry && <span className="error-message">Campo obrigatório...</span>}
            <span className="optional-field">A entrega da doação não depende de nenhum cadastro prévio.</span>
            <div className="all-options">
                <div className="option">
                    <Input
                        type="radio"
                        name="haveRegistry"
                        id="yes-aws"
                        value="Sim"
                        ref={props.register({ required: true })} />
                    <label htmlFor="yes-aws"> Sim</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="haveRegistry"
                        id="not-aws"
                        value="Não"
                        ref={props.register({ required: true })} />
                    <label htmlFor="not-aws"> Não.</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="haveRegistry"
                        id="not-know-aws"
                        value="Não sei"
                        ref={props.register({ required: true })} />
                    <label htmlFor="not-know-aws"> Não sei.</label>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PreviousRegister;