import React from 'react';
import { Input } from './../../../../index';

function AvaiableHours(props) {
    return (
    <div className="form-group" id="question10">
        <div className="inputs-group">
            <label>
                Qual período do dia você poderia ajudar? *
            </label>
            {props.errors.scheduleTime && <span className="error-message">Campo obrigatorio...</span>}
            <div className="all-options">
                <div className="option">
                    <Input
                        type="radio"
                        name="scheduleTime"
                        id="op1-scheduleTime"
                        value="Manhã (8h às 12h)"
                        ref={props.register({ required: true })} />
                    <label htmlFor="op1-scheduleTime"> Manhã (8h às 12h)</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="scheduleTime"
                        id="op2-scheduleTime"
                        value="Tarde (13h às 18h)"
                        ref={props.register({ required: true })} />
                    <label htmlFor="op2-scheduleTime"> Tarde (13h às 18h)</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="scheduleTime"
                        id="op3-scheduleTime"
                        value="Manhã e Tarde"
                        ref={props.register({ required: true })} />
                    <label htmlFor="op3-scheduleTime"> Manhã e Tarde</label>
                </div>
                <div className="option">
                    <Input
                        type="radio"
                        name="scheduleTime"
                        id="op4-scheduleTime"
                        value="Outro"
                        ref={props.register({ required: true })} />
                    <label htmlFor="op4-scheduleTime"> Outro</label>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AvaiableHours;