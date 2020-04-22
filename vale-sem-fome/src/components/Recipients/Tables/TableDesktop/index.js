import React from 'react';
import './table-desktop.scss';

function TableDesktop({fullName, cpf, 
    regionCity, neighbourhood,
    currentFinancialStatus}){
        let currentStatus = "currentStatus";
        switch (currentFinancialStatus) {
            case "Extremamente Séria":
                currentStatus += " extremely-serious";
                break;
            case "Muito Séria":
                currentStatus += " really-serious";
                break;
            case "Séria":
                currentStatus += " serious";
                break;
            case "Risco":
                currentStatus += " risk";
                break;
            case "Outros":
                currentStatus += " others-status";
                    break;
            default:
                break;
        }
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
                        <td className={currentStatus}>{currentFinancialStatus}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDesktop;