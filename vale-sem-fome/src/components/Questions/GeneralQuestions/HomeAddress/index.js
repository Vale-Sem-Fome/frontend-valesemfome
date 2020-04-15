import React from 'react';
import { Input, InputMask, FakeGroupButton } from './../../../index';

function HomeAddress(props) {
    return (
        <div className="form-group" id={props.question.id}>
            <div className="inputs-group">
                <label htmlFor="address">
                    <span className="question-number">{props.question.number}.</span> {props.question.title}
                </label>
                <div className="input-field">
                    {props.errorsMock.cep && <span className="error-message">Digite um CEP válido...</span>}
                    <label htmlFor="cep">CEP*:</label>
                    <InputMask
                        type="text"
                        name="cep"
                        id="cep"
                        placeholder="12000-000"
                        mask="99999-999"
                        value={props.cep}
                        onChange={props.getCEP} />
                </div>
                <div className="input-field">
                    {props.errorsMock.street && <span className="error-message">Campo obrigatório...</span>}
                    <label htmlFor="street">Rua*:</label>
                    <Input
                        type="text"
                        name="street"
                        id="street"
                        placeholder="Avenida das Flores"
                        value={props.street}
                        onChange={(event) => props.setStreet(event.target.value)} />
                </div>
                {props.errors.number && <span className="error-message">Campo obrigatório...</span>}
                <div className="input-field">
                    <label htmlFor="house-number">Nº*:</label>
                    <Input
                        type="text"
                        name="number"
                        id="house-number"
                        placeholder="200"
                        ref={props.register({ required: true })} />

                </div>
                <div className="input-field">
                    {props.errorsMock.neighborhood && <span className="error-message">Campo obrigatório...</span>}
                    <label htmlFor="neighborhood">Bairro*:</label>
                    <Input
                        type="text"
                        name="neighborhood"
                        id="neighborhood"
                        placeholder="Campo dos Elíseos"
                        value={props.neighborhood}
                        onChange={(event) => props.setNeighborhood(event.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="reference-point">Ponto de Referência:</label>
                    <Input
                        type="text"
                        name="referencePoint"
                        id="reference-point"
                        placeholder="Na esquina do campo de futebol."
                        ref={props.register} />
                </div>

                <div className="input-field">
                    <label htmlFor="reference-point">Complemento:</label>
                    <Input
                        type="text"
                        name="complement"
                        id="complement"
                        placeholder="Responda aqui..."
                        value={props.complement}
                        onChange={(event) => props.setComplement(event.target.value)} />
                </div>
                <FakeGroupButton before={props.question.before} after={props.question.after} />
            </div>
        </div>
    )
}

export default HomeAddress;