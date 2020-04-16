import React from 'react';
import { 
    Input,
    FakeGroupButton
} from './../../../../index';

function PreviousVolunteersRegister(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label>
                    <span className="question-number">{props.question.number}.</span>
                    Você já havia se cadastrado antes como voluntários do Movimento Covid19 SJC SEM FOME? *
                </label>
                {props.errors.isRegister && <span className="error-message">Campo Obrigatório...</span>}
                <div className="all-options">
                    <div className="option">
                        <Input
                            type="radio"
                            name="isRegister"
                            id="op1-isRegister"
                            value="Sim"
                            ref={props.register({ required: true })} />
                        <label htmlFor="op1-isRegister"> Sim.</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="isRegister"
                            id="op2-isRegister"
                            value="Não, esta é a primeira vez"
                            ref={props.register({ required: true })} />
                        <label htmlFor="op2-isRegister"> Não, esta é a primeira vez.</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="isRegister"
                            id="op3-isRegister"
                            value="Não me lembro"
                            ref={props.register({ required: true })} />
                        <label htmlFor="op3-isRegister"> Não me lembro.</label>
                    </div>
                </div>
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    );
}

export default PreviousVolunteersRegister;