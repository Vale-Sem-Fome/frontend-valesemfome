import React from 'react';
import './find-by-one.scss';

function FindByOne({ recipientDatas }) {
    const listRecipients = recipientDatas.map((recipient) =>
       <section>
           <header>
               <h3>{recipient.name}</h3>
               <span>ID: {recipient.id}</span>
           </header>
           <main>
                <span>
                    <strong>CPF: </strong>
                    {recipient.cpf}
                </span>
                <span>
                    <strong>E-mail: </strong>
                    {recipient.email}
                </span>
                <span>
                    <strong>Data de Nascimento: </strong>
                    {recipient.birthday}
                </span>
                <span>
                    <strong>Rua: </strong>
                    {recipient.street}
                </span>
                <span>
                    <strong>Número: </strong>
                    {recipient.number}
                </span>
                <span>
                    <strong>Complemento: </strong>
                    {recipient.complement}
                </span>
                <span>
                    <strong>Ponto de Referência: </strong>
                    {recipient.reference}
                </span>
                <span>
                    <strong>Região: </strong>
                    {recipient.region}
                </span>
                <span>
                    <strong>Número de Moradores: </strong>
                    {recipient.residents}
                </span>
                <span>
                    <strong>Situação Atual: </strong>
                    {recipient.status}
                </span>
                <span>
                    <strong>Cadastro Único: </strong>
                    {recipient.prevRegistry}
                </span>
                <span>
                    <strong>Termo de Aceite: </strong>
                    {recipient.acceptanceTerm}
                </span>
                <span>
                    <strong>Kit: </strong>
                    {recipient.kit}
                </span>
           </main>
       </section>
    );
    return (
        <div className="find-by-one">
            <div className="container">
                {listRecipients}
            </div>
        </div>
    )
}

export default FindByOne;