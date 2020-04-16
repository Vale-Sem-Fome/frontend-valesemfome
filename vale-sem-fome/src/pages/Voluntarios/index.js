import React, { useState } from 'react'
import {
    HeaderVolunteer,
    Footer,
    FullName,
    Document,
    Email,
    BirthDay,
    PhoneNumber,
    HomeAddress,
    PreviousVolunteersRegister,
    WorkFront,
    AvaiableDays,
    AvaiableHours,
    AcceptanceTerm
} from '../../components'
import { useForm } from 'react-hook-form'
import validarCpf from 'validar-cpf'
import Api from '../../services/api'
import Cep from '../../services/cep'
const titlePage = "Cadastro de Voluntários";

export default function Home(props) {
    document.title = titlePage;
    const { register, handleSubmit, errors } = useForm()
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [complement, setComplement] = useState("");
    const [city, setCity] = useState("");
    const [errorsMock, setErrosMock] = useState({ cep: false, street: false, neighborhood: false, city: false });
    let numbersQuestion = 1;

    const onSubmit = async data => {
        if (cep && street && neighborhood) {
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
            } else if (validarCpf(data.document)) {
                setErrosMock({ cep: false, street: false, neighborhood: false, city: false });

                const newUser = {
                    voluntario_nome: data.fullName,
                    voluntario_email: data.email,
                    voluntario_celular: data.phone,
                    voluntario_cpf: data.document,
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
                    voluntario_dias_ajuda: `${(data.monday) ? data.monday : ''} ${(data.tuesday) ? data.tuesday : ''} ${(data.wednesday) ? data.wednesday : ''} ${(data.thursday) ? data.thursday : ''} ${(data.friday) ? data.friday : ''}`,
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
                    const { logradouro, bairro, localidade, complemento } = response.data;
                    setStreet(logradouro);
                    setNeighborhood(bairro);
                    setComplement(complemento);
                    setCity(localidade);
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
            component: PreviousVolunteersRegister
        },
        {
            component: WorkFront
        },
        {
            component: AvaiableDays
        },
        {
            component: AvaiableHours
        },
    ];

    return (
        <div>
            <main className="main">
                <div className="container">
                    <HeaderVolunteer />
                    <form onSubmit={handleSubmit(onSubmit)} className="form" id="form">
                    <div className="container">
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
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
