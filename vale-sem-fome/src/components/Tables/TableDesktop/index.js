import React from 'react';
import './table-desktop.scss';

function TableDesktop(){
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <th>Nome:</th>
                    <th>CPF:</th>
                    <th>Região</th>
                    <th>Bairro</th>
                    <th>Situação Atual:</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            José Luiz Vasco
                        </td>
                        <td>
                            011.010.001-00
                        </td>
                        <td>
                            Zona Leste
                        </td>
                        <td>
                            Novo Horizonte
                        </td>
                        <td>
                            Extremamente Séria
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Sheila Santana Vilela Araújo
                        </td>
                        <td>
                            011.010.001-00
                        </td>
                        <td>
                            Zona Norte
                        </td>
                        <td>
                            Santana
                        </td>
                        <td>
                            Muito Séria
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Thaís Okamoto
                        </td>
                        <td>
                            011.010.001-00
                        </td>
                        <td>
                            Zona Oeste
                        </td>
                        <td>
                            Jardim das Indústrias
                        </td>
                        <td>
                            Séria
                        </td>
                    </tr>
                    <tr>
                        <td>
                        André Luiz Serena Maciel
                        </td>
                        <td>
                            011.010.001-00
                        </td>
                        <td>
                            Centro
                        </td>
                        <td>
                            Jardim Santa Inês
                        </td>
                        <td>
                            Outros
                        </td>
                    </tr>
                    <tr>
                        <td>
                        André Luiz Serena Maciel
                        </td>
                        <td>
                            011.010.001-00
                        </td>
                        <td>
                            Centro
                        </td>
                        <td>
                            Jardim Santa Inês
                        </td>
                        <td>
                            Risco
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableDesktop;