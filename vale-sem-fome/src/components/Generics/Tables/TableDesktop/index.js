import React from 'react';
import './table-desktop.scss';

function TableDesktop({fullName, cpf, 
    regionCity, neighbourhood,
    currentFinancialStatus}){
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                    <th>Nome:</th>
                    <th>CPF:</th>
                    <th>Região</th>
                    <th>Bairro</th>
                    <th>Situação Atual:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fullName}</td>
                        <td>{cpf}</td>
                        <td>{regionCity}</td>
                        <td>{neighbourhood}</td>
                        <td>{currentFinancialStatus}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDesktop;