import React from 'react';
import { 
    Input,
    FakeGroupButton
} from './../../../../index';

function WorkFront(props) {
    return (
    <div className="form-group" id={props.question.id}>
        <div className="inputs-group">
            <label>
                <span className="question-number">{props.question.number}.</span>
                Qual frente você pode ajudar? *
            </label>
            {props.errors.jobArea && <span className="error-message">Campo obrigatório...</span>}
            <div className="all-options">
                <div className="option">
                    <Input
                        type="radio"
                        name="jobArea"
                        id="opt1"
                        value="Montagem de Kits de Alimentos"
                        ref={props.register({ required: true })} />
                    <label htmlFor="opt1"> Montagem de Kits de Alimentos</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="jobArea"
                        id="opt2"
                        value="Entrega Porta a Porta (necessário ter carro)"
                        ref={props.register({ required: true })} />
                    <label htmlFor="opt2"> Entrega Porta a Porta (necessário ter carro)</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="jobArea"
                        id="opt3"
                        value="Ambos"
                        ref={props.register({ required: true })} />
                    <label htmlFor="opt3"> Ambos</label>
                </div>
            </div>
            <FakeGroupButton before={props.question.before} after={props.question.after} />
        </div>
    </div>
    );
}

export default WorkFront;