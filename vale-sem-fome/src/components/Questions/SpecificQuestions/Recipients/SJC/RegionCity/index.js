import React from 'react';
import { Input } from './../../../../../index';

function RegionCity(props){
    return (
        <div className="form-group">
            <div className="inputs-group">
                <label>
                    Qual região da cidade fica sua residência? *
                </label>
                {props.errors.region && <span className="error-message">Campo obrigatório...</span>}
                <div className="all-options">
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-south"
                            value="Sul"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-south"> Sul</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-north"
                            value="Norte"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-north"> Norte</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-center"
                            value="Centro"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-center"> Centro</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-west"
                            value="Oeste"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-west"> Oeste</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-east"
                            value="Leste"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-east"> Leste</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-sfx"
                            value="Distrito SFX"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-sfx"> Distrito SFX</label>
                    </div>
                    <div className="option">
                        <Input
                            type="radio"
                            name="region"
                            id="opt-edm"
                            value="Distrito Eugênio de Melo"
                            ref={props.register({ required: true })} />
                        <label htmlFor="opt-edm"> Distrito Eugênio de Melo</label>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default RegionCity;