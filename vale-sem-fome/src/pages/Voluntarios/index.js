import React, { useState } from 'react'
import {
    Header,
    Footer,
    Input,
    FakeGroupButton,
    InputMask
} from '../../components'
import { useForm } from 'react-hook-form'
import Api from '../../services/api'
import Cep from '../../services/cep'

export default function Home(props) {
    const { register, handleSubmit, errors } = useForm()
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [city, setCity] = useState("");
    const [errorsMock, setErrosMock] = useState({ cep: false, street: false, neighborhood: false, city: false });

    const onSubmit = async data => {
        setErrosMock({
            cep: (cep.length === 0) ? true : false,
            street: (street.length === 0) ? true : false,
            neighborhood: (neighborhood.length === 0) ? true : false,
            city: (city.length === 0) ? true : false
        });
        if (street.length === 0) {
            alert('Digite sua rua!');
        } else if (cep.length === 0) {
            alert('Digite seu CEP!');
        } else if (neighborhood.length === 0) {
            alert('Digite seu bairro!')
        } else if (city.length === 0) {
            alert('Digite sua cidade!')
        } else {
            setErrosMock({ cep: false, street: false, neighborhood: false, city: false });

            const newUser = {
                voluntario_nome: data.fullName,
                voluntario_email: data.email,
                voluntario_celular: data.phone,
                voluntario_endereco_cep: cep,
                voluntario_endereco: street,
                voluntario_endereco_numero: data.number,
                voluntario_endereco_bairro: neighborhood,
                voluntario_endereco_complemento: complement,
                voluntario_endereco_referencia: data.referencePoint,
                voluntario_endereco_cidade: city,
                voluntario_endereco_estado: "São Paulo",
                voluntario_endereco_pais: "Brasil",
                voluntario_data_nascimento: data.birthday,
                voluntario_periodo_ajuda: data.scheduleTime,
                voluntario_forma_de_ajuda: data.jobArea,
                voluntario_ja_cadastrado: data.isRegister,
                voluntario_dias_ajuda: `${data.monday} ${data.tuesday} ${data.wednesday} ${data.thursday} ${data.friday}`,
                voluntario_termo_aceite: (data.termsAgreements === "Aceito") ? true : false,
            }

            await Api.post('/create/voluntario', newUser, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                    'Access-Control-Allow-Headers': 'origin, x-requested-with'
                }
            })
                .then(response => {
                    alert(response.data.message);
                    props.history.push("/obrigado/voluntario")
                })
                .catch(error => alert(error.response.data.message));
        }
    }

    const getCEP = async (event) => {
        const document = event.target.value.replace('-', '');
        setCep(event.target.value);
        if (document.length === 8) {
            await Cep.get(`${document}/json`)
                .then(response => {
                    const { logradouro, bairro, localidade, complemento } = response.data;
                    setStreet(logradouro);
                    setNeighborhood(bairro);
                    setComplement(complemento);
                    setCity(localidade);
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
                                <label htmlFor="whatsapp">
                                    <span className="question-number">2.</span> Qual é o seu telefone de contato (WhatsApp)? *
                                </label>
                                {errors.phone && <span className="error-message">Digite um número de telefone válido...</span>}
                                <InputMask
                                    type="text"
                                    name="phone"
                                    id="whatsapp"
                                    mask="(99) 99999-9999"
                                    placeholder="(12) 99111-1111"
                                    inputRef={register({ required: true, minLength: 14, maxLength: 15 })} />
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
                                <label>
                                    <span className="question-number">5.</span> Qual frente você pode ajudar? *
                                </label>
                                {errors.jobArea && <span className="error-message">Campo obrigatório...</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="jobArea"
                                            id="opt1"
                                            value="Montagem de Kits de Alimentos"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt1"> Montagem de Kits de Alimentos</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="jobArea"
                                            id="opt2"
                                            value="Entrega Porta a Porta (necessário ter carro)"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt2"> Entrega Porta a Porta (necessário ter carro)</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="jobArea"
                                            id="opt3"
                                            value="Ambos"
                                            ref={register({ required: true })} />
                                        <label htmlFor="opt3"> Ambos</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question4" after="question6" />
                            </div>
                        </div>
                        <div className="form-group" id="question6">
                            <div className="inputs-group">
                                <label htmlFor="address">
                                    <span className="question-number">6.</span> Onde você mora? *
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
                                    {errorsMock.neighborhood && <span className="error-message">Campo obrigatório...</span>}
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
                                    {errorsMock.city && <span className="error-message">Campo obrigatório...</span>}
                                    <label htmlFor="city">Cidade*:</label>
                                    <Input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="São José dos Campos"
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)} />
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

                                <FakeGroupButton before="question5" after="question7" />
                            </div>
                        </div>
                        <div className="form-group" id="question7">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">7. </span>
                                    Você já havia se cadastrado antes como voluntários do Movimento Covid19 SJC SEM FOME? *
                                </label>
                                {errors.isRegister && <span className="error-message">Campo Obrigatório...</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="isRegister"
                                            id="op1-isRegister"
                                            value="Sim"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op1-isRegister"> Sim.</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="isRegister"
                                            id="op2-isRegister"
                                            value="Não, esta é a primeira vez"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op2-isRegister"> Não, esta é a primeira vez.</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="isRegister"
                                            id="op3-isRegister"
                                            value="Não me lembro"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op3-isRegister"> Não me lembro.</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question6" after="question8" />
                            </div>
                        </div>
                        <div className="form-group" id="question8">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">8.</span> Quais dias na semana você poderia ajudar? (selecione quantos quiser) *
                                </label>
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="checkbox"
                                            name="monday"
                                            id="monday"
                                            value="Segunda"
                                            ref={register()} />
                                        <label htmlFor="monday"> Segunda</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="checkbox"
                                            name="tuesday"
                                            id="tuesday"
                                            value="Terça"
                                            ref={register()} />
                                        <label htmlFor="tuesday"> Terça</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="checkbox"
                                            name="wednesday"
                                            id="wednesday"
                                            value="Quarta"
                                            ref={register()} />
                                        <label htmlFor="wednesday"> Quarta</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="checkbox"
                                            name="thursday"
                                            id="thursday"
                                            value="Quinta"
                                            ref={register()} />
                                        <label htmlFor="thursday"> Quinta</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="checkbox"
                                            name="friday"
                                            id="friday"
                                            value="Sexta"
                                            ref={register()} />
                                        <label htmlFor="friday"> Sexta</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question7" after="question9" />
                            </div>
                        </div>
                        <div className="form-group" id="question9">
                            <div className="inputs-group">
                                <label>
                                    <span className="question-number">9.</span> Qual período do dia você poderia ajudar? *
                                </label>
                                {errors.scheduleTime && <span className="error-message">Registro</span>}
                                <div className="all-options">
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="scheduleTime"
                                            id="op1-scheduleTime"
                                            value="Manhã (8h às 12h)"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op1-scheduleTime"> Manhã (8h às 12h)</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="scheduleTime"
                                            id="op2-scheduleTime"
                                            value="Tarde (13h às 18h)"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op2-scheduleTime"> Tarde (13h às 18h)</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="scheduleTime"
                                            id="op3-scheduleTime"
                                            value="Manhã e Tarde"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op3-scheduleTime"> Manhã e Tarde</label>
                                    </div>
                                    <div className="option">
                                        <Input
                                            type="radio"
                                            name="scheduleTime"
                                            id="op4-scheduleTime"
                                            value="Outro"
                                            ref={register({ required: true })} />
                                        <label htmlFor="op4-scheduleTime"> Outro</label>
                                    </div>
                                </div>
                                <FakeGroupButton before="question8" after="agreement" />
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
