import React from 'react';
import {
    Input,
    FakeGroupButton
} from './../../../../../index';

function CurrentFinancialStatus(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label>
                    <span className="question-number">{props.question.number}.</span> Como você considera sua situação neste momento? *
                </label>
                {props.errors.situationMoment && <span className="error-message">Campo Obrigatório...</span>}
                <div className="all-options">
                    <div className="option">
                        <Input
                            type="radio"
                            name="situationMoment"
                            id="ext-serious"
                            value="Extremamente Séria"
                            ref={props.register({ required: true })} />
                        <label htmlFor="ext-serious"> Extremamente Séria - Não tenho nenhuma renda nem nada para comer</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="situationMoment"
                            id="much-serious"
                            value="Muito Séria"
                            ref={props.register({ required: true })} />
                        <label htmlFor="much-serious"> Muito Séria - Tenho pouquíssima renda e muito pouco para comer</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="situationMoment"
                            id="serious"
                            value="Séria"
                            ref={props.register({ required: true })} />
                        <label htmlFor="serious"> Séria - Tenho alguma comida, mas não irá durar muito.</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="situationMoment"
                            id="risk"
                            value="Em Risco"
                            ref={props.register({ required: true })} />
                        <label htmlFor="risk"> Em Risco - Só tenho o mínimo.</label>
                    </div>
                    <div className="option">
                        <div className="other-aws">
                            <Input
                                type="radio"
                                name="situationMoment"
                                id="other-aws"
                                value="Outro"
                                ref={props.register({ required: true })} />
                            <label htmlFor="other-aws"> Outro</label>
                            <Input
                                type="text"
                                name="situationMomentOther"
                                id="other-aws"
                                placeholder="Responda aqui..."
                                ref={props.register}
                            />
                        </div>
                    </div>
                </div>
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    )
}

export default CurrentFinancialStatus;