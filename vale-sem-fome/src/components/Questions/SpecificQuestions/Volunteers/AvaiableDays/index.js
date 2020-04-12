import React from 'react';
import { Input } from './../../../../index';

function AvaiableDays(props) {
    return (
        <div className="form-group">
            <div className="inputs-group">
                <label>
                    Quais dias na semana você poderia ajudar? (selecione quantos quiser) *
                </label>
                <div className="all-options">
                    <div className="option">
                        <Input
                            type="checkbox"
                            name="monday"
                            id="monday"
                            value="Segunda"
                            ref={props.register()} />
                        <label htmlFor="monday"> Segunda</label>
                    </div>
                    <div className="option">
                        <Input
                            type="checkbox"
                            name="tuesday"
                            id="tuesday"
                            value="Terça"
                            ref={props.register()} />
                        <label htmlFor="tuesday"> Terça</label>
                    </div>
                    <div className="option">
                        <Input
                            type="checkbox"
                            name="wednesday"
                            id="wednesday"
                            value="Quarta"
                            ref={props.register()} />
                        <label htmlFor="wednesday"> Quarta</label>
                    </div>
                    <div className="option">
                        <Input
                            type="checkbox"
                            name="thursday"
                            id="thursday"
                            value="Quinta"
                            ref={props.register()} />
                        <label htmlFor="thursday"> Quinta</label>
                    </div>
                    <div className="option">
                        <Input
                            type="checkbox"
                            name="friday"
                            id="friday"
                            value="Sexta"
                            ref={props.register()} />
                        <label htmlFor="friday"> Sexta</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AvaiableDays;