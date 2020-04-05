import React, { useState } from 'react'
import {
    Header,
    Footer,
    Input,
    FakeGroupButton,
    InputMask
} from '../../components'
import { useForm } from 'react-hook-form'
import validarCpf from 'validar-cpf'
import Api from '../../services/api'
import Cep from '../../services/cep'

export default function Home(props) {
    const { register, handleSubmit, errors } = useForm()
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [errorsMock, setErrosMock] = useState({ cep: false, street: false, neighborhood: false });

    const onSubmit = async data => {
        setErrosMock({
            cep: (cep.length === 0) ? true : false,
            street: (street.length === 0) ? true : false,
            neighborhood: (neighborhood.length === 0) ? true : false
        });
        if (street.length === 0) {
            alert('Digite sua rua!');
        } else if (cep.length === 0) {
            alert('Digite seu CEP!');
        } else if (neighborhood.length === 0) {
            alert('Digite seu bairro!')
        } else if (validarCpf(data.document)) {
            setErrosMock({ cep: false, street: false, neighborhood: false });
            const newUser = {
                cidadao_nome: data.fullName,
                cidadao_email: data.email,
                cidadao_celular: data.phone,
                cidadao_cpf: data.document,
                cidadao_endereco: street,
                cidadao_endereco_cep: cep,
                cidadao_endereco_complemento: complement,
                cidadao_endereco_bairro: neighborhood,
                cidadao_endereco_numero: data.number,
                cidadao_endereco_referencia: data.referencePoint,
                cidadao_endereco_pais: "Brasil",
                cidadao_endereco_cidade: "São José dos Campos",
                cidadao_endereco_estado: "São Paulo",
                cidadao_tamanho_familia: data.residents,
                cidadao_data_nascimento: data.birthday,
                cidadao_area: data.region,
                cidadao_situacao_risco: (data.situationMoment === "Outro") ? data.situationMomentOther : data.situationMoment,
                cidadao_cadastro_unico: data.haveRegistry,
                cidadao_termo_aceite: (data.termsAgreements === "Aceito") ? true : false
            }

            await Api.post('/create', newUser)
                .then(response => {
                    alert(response.data.message);
                    props.history.push("/obrigado")
                })
                .catch(error => alert(error.response.data.message));
        } else {
            alert("CPF inválido!");
        }
    }

    const getCEP = async (event) => {
        const document = event.target.value.replace('-', '');
        setCep(event.target.value);
        if (document.length === 8) {
            await Cep.get(`${document}/json`)
                .then(response => {
                    const { logradouro, bairro, complemento } = response.data;
                    setStreet(logradouro);
                    setNeighborhood(bairro);
                    setComplement(complemento);
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div>
            <main className="main">
                <Header />
                <form onSubmit={handleSubmit(onSubmit)} className="form" id="form">
                    <div className="container">
                        <div className="form-group" id="question1">
                            <div className="inputs-group">
                                <label htmlFor="full-name">
                                    <span className="question-number">1.</span> Qual seu nome completo? *
                                </label>
                                {errors.fullName && <span className="error-message">É necessário digitar seu nome completo!</span>}
                                <Input
                                    name="fullName"
                                    type="text"
                                    id="full-name"
                                    placeholder="Responda aqui..."
                                    ref={register({ required: true })} />
                                <FakeGroupButton before="top" after="question2" />
                            </div>
                        </div>
                        <div className="form-group" id="question2">
                            <div className="inputs-group">
                                <label htmlFor="cpf">
                                    <span className="question-number">2.</span> Qual é o seu CPF? (11 dígitos) *
                                </label>
                                {errors.document && <span className="error-message">Campo Obrigatório. Digitar seu CPF:</span>}
                                <InputMask
                                    type="text"
                                    name="document"
                                    id="cpf"
                                    placeholder="000.111.222-33"
                                    mask="999.999.999-99"
                                    inputRef={register({ required: true, minLength: 11, maxLength: 14 })} />
                                <FakeGroupButton before="question1" after="question3" />
                            </div>
                        </div>
                        <div className="form-group" id="question3">
                            <div className="inputs-group">
                                {errors.email && <span className="error-message">Você precisa digitar um e-mail válido...</span>}
                                <label htmlFor="email">
                                    <span className="question-number">3.</span> Qual é o seu e-mail?
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Responda aqui..."
                                    ref={register()} />
                                <label htmlFor="email" className="optional-field">Esse campo é opcional.</label>
                                <FakeGroupButton before="question2" after="question4" />
                            </div>
                        </div>
                        <div className="form-group" id="question4">
                            <div className="inputs-group">
                                <label htmlFor="birthday">
                                    <span className="question-number">4.</span> Data de Nascimento: *
                                </label>
                                {errors.birthday && <span className="error-message">Você não preencheu com a sua data de nascimento...</span>}
                                <Input
                                    type="date"
                                    name="birthday"
                                    id="birthday"
                                    ref={register({ required: true, maxLength: 10 })} />
                                <FakeGroupButton before="question3" after="question5" />
                            </div>
                        </div>
                        <div className="form-group" id="question5">
                            <div className="inputs-group">
                                <label htmlFor="whatsapp">
                                    <span className="question-number">5.</span> Qual é o seu telefone de contato (WhatsApp)? *
                                </label>
                                {errors.phone && <span className="error-message">Digite um número de telefone válido...</span>}
                                <InputMask
                                    type="text"
                                    name="phone"
                                    id="whatsapp"
                                    mask="(99) 99999-9999"
                                    placeholder="(12) 99111-1111"
                                    inputRef={register({ required: true, minLength: 14, maxLength: 15 })} />
                                <FakeGroupButton before="question4" after="question6" />
                            </div>
                        </div>
                        <div className="form-group" id="question6">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">6.</span> Quantas pessoas vivem na sua casa? *
                                </label>
                                {errors.residents && <span className="error-message">Campo obrigatório...</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt1"
                                            value="1"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt1"> 1</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt2"
                                            value="2"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt2"> 2</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt3"
                                            value="3"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt3"> 3</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt4"
                                            value="4"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt4"> 4</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt5"
                                            value="5"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt5"> 5</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt6"
                                            value="6"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt6"> 6</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt7"
                                            value="7"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt7"> 7</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt8"
                                            value="8"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt8"> 8</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt9"
                                            value="9"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt9"> 9</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt10"
                                            value="10"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt10"> 10</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="residents"
                                            id="opt-10more"
                                            value="+10"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-10more"> <strong>+</strong>10</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question5" after="question7" />
                            </div>
                        </div>
                        <div className="form-group" id="question7">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">7.</span> Qual região da cidade fica sua residência? *
                                </label>
                                {errors.region && <span className="error-message">Campo obrigatório...</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-south"
                                            value="Sul"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-south"> Sul</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-north"
                                            value="Norte"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-north"> Norte</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-center"
                                            value="Centro"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-center"> Centro</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-west"
                                            value="Oeste"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-west"> Oeste</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-east"
                                            value="Leste"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-east"> Leste</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-sfx"
                                            value="Distrito SFX"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-sfx"> Distrito SFX</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="region"
                                            id="opt-edm"
                                            value="Distrito Eugênio de Melo"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt-edm"> Distrito Eugênio de Melo</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question6" after="question8" />
                            </div>
                        </div>
                        <div className="form-group" id="question8">
                            <div className="inputs-group">
                                <label htmlFor="address">
                                    <span className="question-number">8.</span> Qual é o seu endereço São José dos Campos? *
                                </label>
                                <div className="input-field">
                                    {errorsMock.cep && <span className="error-message">Digite um CEP válido...</span>}
                                    <label htmlFor="cep">CEP*:</label>
                                    <InputMask
                                        type="text"
                                        name="cep"
                                        id="cep"
                                        placeholder="12000-000"
                                        mask="99999-999"
                                        value={cep}
                                        onChange={getCEP} />
                                </div>
                                <div className="input-field">
                                    {errorsMock.street && <span className="error-message">Campo obrigatório...</span>}
                                    <label htmlFor="street">Rua*:</label>
                                    <Input
                                        type="text"
                                        name="street"
                                        id="street"
                                        placeholder="Avenida das Flores"
                                        value={street}
                                        onChange={(event) => setStreet(event.target.value)} />
                                </div>
                                {errors.number && <span className="error-message">Campo obrigatório...</span>}
                                <div className="input-field">
                                    <label htmlFor="house-number">Nº*:</label>

                                    <Input
                                        type="text"
                                        name="number"
                                        id="house-number"
                                        placeholder="200"
                                        ref={register({ required: true })} />

                                </div>
                                <div className="input-field">
                                    {errorsMock.neighborhood && <span>Campo obrigatório...</span>}
                                    <label htmlFor="neighborhood">Bairro*:</label>
                                    <Input
                                        type="text"
                                        name="neighborhood"
                                        id="neighborhood"
                                        placeholder="Campo dos Elíseos"
                                        value={neighborhood}
                                        onChange={(event) => setNeighborhood(event.target.value)} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="reference-point">Ponto de Referência:</label>
                                    <Input
                                        type="text"
                                        name="referencePoint"
                                        id="reference-point"
                                        placeholder="Na esquina do campo de futebol."
                                        ref={register} />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="reference-point">Complemento:</label>
                                    <Input
                                        type="text"
                                        name="complement"
                                        id="complement"
                                        placeholder="Responda aqui..."
                                        value={complement}
                                        onChange={(event) => setComplement(event.target.value)} />
                                </div>

                                <FakeGroupButton before="question7" after="question9" />
                            </div>
                        </div>
                        <div className="form-group" id="question9">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">9. </span>
                                    Como você considera sua situação neste momento? *
                                </label>
                                {errors.situationMoment && <span className="error-message">Campo Obrigatório...</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="situationMoment"
                                            id="ext-serious"
                                            value="Extremamente Séria"
                                            ref={register({ required: true })} />
                                        <label htmlFor="ext-serious"> Extremamente Séria - Não tenho nenhuma renda nem nada para comer</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="situationMoment"
                                            id="much-serious"
                                            value="Muito Séria"
                                            ref={register({ required: true })} />
                                        <label htmlFor="much-serious"> Muito Séria - Tenho pouquíssima renda e muito pouco para comer</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="situationMoment"
                                            id="serious"
                                            value="Séria"
                                            ref={register({ required: true })} />
                                        <label htmlFor="serious"> Séria - Tenho alguma comida, mas não irá durar muito.</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="situationMoment"
                                            id="risk"
                                            value="Em Risco"
                                            ref={register({ required: true })} />
                                        <label htmlFor="risk"> Em Risco - Só tenho o mínimo.</label>
                                    </div>
                                    <div className="option">
                                        <div className="other-aws">
                                            <Input
                                                type="radio"
                                                name="situationMoment"
                                                id="other-aws"
                                                value="Outro"
                                                ref={register({ required: true })} />
                                            <label htmlFor="other-aws"> Outro</label>
                                            <Input
                                                type="text"
                                                name="situationMomentOther"
                                                id="other-aws"
                                                placeholder="Responda aqui..."
                                                ref={register}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <FakeGroupButton before="question8" after="question10" />
                            </div>
                        </div>
                        <div className="form-group" id="question10">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">10.</span> Por último, você (sua família) já possuem cadastro único? *
                                </label>
                                {errors.haveRegistry && <span className="error-message">Registro</span>}
                                <span className="optional-field">A entrega da doação não depende de nenhum cadastro prévio.</span>
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="haveRegistry"
                                            id="yes-aws"
                                            value="Sim"
                                            ref={register({ required: true })} />
                                        <label htmlFor="yes-aws"> Sim</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="haveRegistry"
                                            id="not-aws"
                                            value="Não"
                                            ref={register({ required: true })} />
                                        <label htmlFor="not-aws"> Não.</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="haveRegistry"
                                            id="not-know-aws"
                                            value="Não sei"
                                            ref={register({ required: true })} />
                                        <label htmlFor="not-know-aws"> Não sei.</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question9" after="agreement" />
                            </div>
                        </div>
                        <div className="form-group" id="agreement">
                            <div className="inputs-group">
                                <div className="link">
                                    <a href="#question1">Revisar minhas Repostas</a>
                                </div>
                                <section>
                                    <h3>TERMO DE ACEITE</h3>
                                    <p>
                                        Autorizo receber mensagens com informações e questões sobre
                                        <strong>MOVIMENTO COVID19 SJC SEM FOME</strong> e que meus dados sejam armazenados
                                        para fins estatísticos nos termos da Lei Geral de Proteção de Dados. *
                                    </p>
                                </section>
                                {errors.termsAgreements && <span className="error-message">Campo obrigatório...</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="termsAgreements"
                                            id="agree"
                                            value="Aceito"
                                            ref={register({ required: true })} />
                                        <label htmlFor="agree"> Aceito</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="termsAgreements"
                                            id="not-agree"
                                            value="Não aceito"
                                            ref={register({ required: true })} />
                                        <label htmlFor="not-agree"> Não Aceito</label>
                                    </div>
                                </div>
                                <div className="form-buttons" id="send-answer">
                                    <Input name="button" type="submit" value="Enviar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}
