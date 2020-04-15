import React, { useState } from 'react'
import {
    Header,
    Footer,
    FullName,
    Document,
    Email,
    BirthDay,
    PhoneNumber,
    HomeAddress,
    RegionCity,
    ResidentsQuantity,
    CurrentFinancialStatus,
    PreviousRegister,
    AcceptanceTerm
} from '../../components'
import { useForm } from 'react-hook-form'
import validarCpf from 'validar-cpf'
import Api from '../../services/api'
import Cep from '../../services/cep'

const titlePage = "Cadastro de Beneficiários";

export default function Home(props) {
    document.title = titlePage;
    const { register, handleSubmit, errors } = useForm();
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [errorsMock, setErrosMock] = useState({ cep: false, street: false, neighborhood: false });
    let numbersQuestion = 1;

    const onSubmit = async data => {

        if (cep && street && neighborhood) {
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

                await Api.post('/create/beneficiario', newUser, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                        'Access-Control-Allow-Headers': 'origin, x-requested-with'
                    }
                })
                    .then(response => {
                        alert(response.data.message);
                        props.history.push("/obrigado")
                    })
                    .catch(error => alert(error.response.data.message));
            } else {
                alert("CPF inválido!");
            }
        } else {
            alert("Digite novamente seu endereço ou atualize a página!");
        }
    }

    const getCEP = async (event) => {
        const document = event.target.value.replace('-', '');
        setCep(event.target.value);
        if (document.length === 8) {
            await Cep.get(`${document}/json`)
                .then(response => {
                    if (!response.data.error) {
                        const { logradouro, bairro, complemento } = response.data;
                        setStreet(logradouro);
                        setNeighborhood(bairro);
                        setComplement(complemento);
                    }
                })
                .catch(error => console.log(error));
        }
    }

    const listQuestions = [
        {
            component: FullName
        },
        {
            component: Document
        },
        {
            component: Email
        },
        {
            component: BirthDay
        },
        {
            component: PhoneNumber
        },
        {
            title: 'Qual é o seu endereço São José dos Campos? *',
            component: HomeAddress
        },
        {
            component: RegionCity
        },
        {
            component: ResidentsQuantity
        },
        {
            component: CurrentFinancialStatus
        },
        {
            component: PreviousRegister
        },
    ];

    return (
        <div>
            <main className="main">
                <div className="container">
                    <Header />
                    <form onSubmit={handleSubmit(onSubmit)} className="form" id="form">
                        {listQuestions.map(
                            question => {

                                question.id = `question${numbersQuestion}`;
                                question.before = (numbersQuestion === 1) ? 'top' : `question${numbersQuestion - 1}`;
                                question.after = (numbersQuestion === listQuestions.length) ? 'agreement' : `question${numbersQuestion + 1}`;

                                question.number = numbersQuestion;
                                numbersQuestion += 1;

                                if (question.component === HomeAddress) {
                                    return (
                                        <question.component
                                            question={question}
                                            key={question.id}
                                            register={register}
                                            errors={errors}
                                            errorsMock={errorsMock}
                                            setComplement={setComplement}
                                            setErrosMock={setErrosMock}
                                            setStreet={setStreet}
                                            setNeighborhood={setNeighborhood}
                                            cep={cep}
                                            street={street}
                                            neighborhood={neighborhood}
                                            complement={complement}
                                            getCEP={getCEP}
                                        />
                                    )
                                } else {
                                    return (
                                        <question.component
                                            question={question}
                                            key={question.id}
                                            register={register}
                                            errors={errors} />
                                    )
                                }
                            }
                        )}
                        <AcceptanceTerm register={register} errors={errors} />
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
