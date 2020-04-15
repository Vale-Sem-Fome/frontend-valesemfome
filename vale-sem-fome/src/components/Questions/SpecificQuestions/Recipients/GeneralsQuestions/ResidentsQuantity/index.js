import React from 'react';
import {
    Input,
    FakeGroupButton
} from './../../../../../index';

function ResidentsQuantity(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label>
                    <span className="question-number">{props.question.number}.</span> Quantas pessoas vivem na sua casa? *
                </label>
                {props.errors.residents && <span className="error-message">Campo obrigatório...</span>}
                <div className="all-options">
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt1"
                            value="1"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt1"> 1</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt2"
                            value="2"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt2"> 2</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt3"
                            value="3"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt3"> 3</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt4"
                            value="4"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt4"> 4</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt5"
                            value="5"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt5"> 5</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt6"
                            value="6"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt6"> 6</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt7"
                            value="7"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt7"> 7</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt8"
                            value="8"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt8"> 8</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt9"
                            value="9"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt9"> 9</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt10"
                            value="10"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt10"> 10</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="residents"
                            id="opt-10more"
                            value="+10"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-10more"> <strong>+</strong>10</label>
                    </div>
                </div>
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    )
}

export default ResidentsQuantity;