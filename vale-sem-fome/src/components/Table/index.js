import React from 'react';
import './table.scss';

function Table(){
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
                </tbody>
            </table>
        </div>
    )
}

export default Table;